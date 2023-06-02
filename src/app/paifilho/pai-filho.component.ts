import { Component, OnInit } from '@angular/core';
import { Pai } from '../models/pai.model';
import { Filho } from '../models/filho.model';
import { DataService } from './data.service';
import {PaiService} from "./pai.service";
import {FilhoService} from "./filho.service";

@Component({
  selector: 'app-pai-filho',
  templateUrl: './pai-filho.component.html',
  styleUrls: ['./pai-filho.component.css']
})
export class PaiFilhoComponent implements OnInit {

  pais: Pai[] = [];
  filhos: Filho[] = [];
  paiSelecionado: Pai | null = null;
  colunas: string[] = ['id', 'nome', 'idade', 'acoes'];
  editingFilho: Filho | null = null;

  constructor(private dataService: DataService, private paiService: PaiService, private filhoService: FilhoService) {
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.dataService.getPais().subscribe(pais => {
      this.pais = pais;
    });
  }

  onSelectPai(): void {
    // Obter os filhos relacionados ao pai selecionado
    if (this.paiSelecionado) {
      this.dataService.getFilhosByPaiId(this.paiSelecionado.id).subscribe(filhos => {
        this.filhos = filhos;
      });
    } else {
      this.filhos = [];
    }
  }

  getFilhosByPaiId(paiId: number) {
    this.paiService.getFilhosByPaiId(paiId).subscribe(filhos => {
      this.filhos = filhos;
    });
  }

  onEditFilho(filho: Filho): void {
    this.editingFilho = filho;
  }

  onSaveFilho(filho: Filho) {
    if (filho.id) {
      this.filhoService.atualizarFilho(filho).subscribe(() => {
        this.editingFilho = null;
        this.getFilhosByPaiId(this.paiSelecionado!.id);
      });
    } else {
      this.filhoService.criarFilho(filho).subscribe(() => {
        this.editingFilho = null;
        this.getFilhosByPaiId(this.paiSelecionado!.id);
      });
    }
  }

  adicionarFilho() {
    if (this.paiSelecionado !== null) {
      const novoFilho: Filho = {
        id: 0,
        nome: '',
        idade: 0,
        pai: this.paiSelecionado
      };

      this.filhoService.criarFilho(novoFilho).subscribe((filho) => {
        this.filhos.push(filho);
        this.filhos = [...this.filhos]; // Atualiza a referência da lista para forçar a atualização do grid
      });
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'ArrowDown' && index === this.filhos.length - 1) {
      event.preventDefault(); // Impede que o cursor se mova para o próximo campo
      this.adicionarFilho();
    }
  }
}

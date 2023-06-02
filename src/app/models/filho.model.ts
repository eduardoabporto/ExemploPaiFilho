import {Pai} from "./pai.model";

export interface Filho {
  id: number;
  nome: string;
  idade: number;
  pai: Pai;
}

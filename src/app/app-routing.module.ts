import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiComponent } from './paifilho/pai-filho.component';
import { FilhoComponent } from './filho/filho.component';

const routes: Routes = [
  { path: 'pai', component: PaiComponent },
  { path: 'filho', component: FilhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

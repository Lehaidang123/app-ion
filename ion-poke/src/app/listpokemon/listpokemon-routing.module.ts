import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListpokemonPage } from './listpokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ListpokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListpokemonPageRoutingModule {}

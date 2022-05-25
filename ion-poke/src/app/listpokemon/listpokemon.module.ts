import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListpokemonPageRoutingModule } from './listpokemon-routing.module';
import { ListpokemonPage } from './listpokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpokemonPageRoutingModule,
    Ng2SearchPipeModule

  ],
  declarations: [ListpokemonPage]
})
export class ListpokemonPageModule {}

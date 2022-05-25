import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },


  // {
  //   path: 'listpokemon',
  //   loadChildren: () => import('./listpokemon/listpokemon.module').then( m => m.ListpokemonPageModule)
  // },
  {
    path: '',

 loadChildren: () => import('./container/container.module').then( m => m.ContainerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

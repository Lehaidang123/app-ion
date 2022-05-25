// eslint-disable-next-line @typescript-eslint/quotes
import { Component, Input, OnInit,ViewChild  } from "@angular/core";
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { PokemonService } from './../services/pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listpokemon',
  templateUrl: './listpokemon.page.html',
  styleUrls: ['./listpokemon.page.scss'],
})
export class ListpokemonPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  poketmons: any = [];
  numTimesLeft = 4;
  isDesktop = false;
  offset = 0;
  limmit=20;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Filter: string;
  pokemonDetails: any=[];
  constructor( private pokemonserviceService: PokemonService,
    private platform: Platform) { }

  ngOnInit() {
  }
  ionViewDidEnter() {  this.getPokemons();}

  getPokemons() {
    this.pokemonserviceService.getAllPokemon(this.offset,this.limmit).subscribe((res: any) => {
      this.poketmons = res.results;

      this.getPoketmondetail();
    });
  }
  getPoketmondetail() {
    for (const item of this.poketmons) {
      if (true) {
        this.pokemonserviceService.getPokemon1(item.name).subscribe((res) => {
          this.pokemonDetails.push(res);

        });
      }
    }
  }

  loadMore()
  {
    this.pokemonserviceService.getAllPokemon1((this.offset+=20),this.limmit).subscribe((res: any) => {
      this.poketmons = res.results;

      this.getPoketmondetail();
    });
  }
  loadData(event) {
    setTimeout(() => {

     this.loadMore();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 400);
  }

}

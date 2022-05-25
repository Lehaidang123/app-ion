
import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  offset = 0;
  pokemon = [];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  constructor(private pokeService: PokemonService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.loadPokemon();
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 20;
    }

    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }

      //Optional
      // eslint-disable-next-line eqeqeq
      if (this.offset == 1126) {
        this.infinite.disabled = true;
      }
    });
  }

  onSearchChange(e) {
    const value = e.detail.value;

    // eslint-disable-next-line eqeqeq
    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }

    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
}

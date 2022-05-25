import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: number;
  details: any;
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };
  constructor( private pokeService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('id');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      this.details = details;
    });

  }

}

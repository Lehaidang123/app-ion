import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl= environment.baseUrl;
  imageUrl= environment.imageUrl;
  url= environment.url;
  constructor(private http: HttpClient) {}

  getPokemon(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`)
      .pipe(
        // eslint-disable-next-line @typescript-eslint/dot-notation
        map(result => result['results']),
        map(pokemon => pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(offset + index + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          }))
      );
  }
  findPokemon(search) {
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      map(pokemon => {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        pokemon['image'] = this.getPokeImage(pokemon['id']);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        pokemon['pokeIndex'] = pokemon['id'];
        return pokemon;
      })
    );
  }

  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  getPokeDetails(index) {
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(poke => {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        const sprites = Object.keys(poke['sprites']);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        poke['images'] = sprites
          // eslint-disable-next-line @typescript-eslint/dot-notation
          .map(spriteKey => poke['sprites'][spriteKey])
          .filter(img => img);
        return poke;
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  getAllPokemon(offset: number, limit : number) {
    return this.http.get(
     this.url+`?offset=${offset}&limit=${limit}`
    );
  }
  getPokemon1(name: string) {
    return this.http.get(this.url+`/${name}`);
  }
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  getAllPokemon1(offset: number, limit : number) {
    return this.http.get(
     this.url+`?offset=${offset}&limit=${limit}`
    );
  }
}

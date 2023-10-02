import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonCountByLetter: { [key: string]: number } = {};

  constructor() { }

}


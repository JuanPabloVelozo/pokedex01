import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private selectedPokemon: any;
  private pokemonDataSubject = new Subject<any>();
  pokemonData$ = this.pokemonDataSubject.asObservable();

  //metodo para guardar los datos del pokemon seleccionado
  setPokemonData(data: any) {
    this.selectedPokemon = data;
    this.pokemonDataSubject.next(data); 
  }

  // metodo para obtener los datos del Pokemon seleccionado
  getPokemonData() {
    return this.selectedPokemon;
  }


}

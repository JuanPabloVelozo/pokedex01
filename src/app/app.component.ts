import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonDataService } from './pokemon-data.service';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  pokemonCountByLetter: { [key: string]: number } = {}
  
  selectedPokemon: any = null;
  pokemonData: any;
  favoritos: any[] = [];
  pokemonFavorito: any = null;

  constructor(private pokemonDataService: PokemonDataService, public pokemonService: PokemonService) {
  }

  mostrarPokemon() {
    this.pokemonData = this.pokemonDataService.getPokemonData();

  }

  quitarDeFavoritos() {
    this.pokemonDataService.setPokemonData(null);
    this.pokemonData = null; 
  }

  ngOnInit() {
    this.pokemonDataService.pokemonData$.subscribe(data => {
      this.pokemonData = data;
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    // detecta cambios en selectedPokemon
    if ('pokemonData' in changes) {
    }
  }

  title = 'pokedex01';
}

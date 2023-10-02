import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    DetallePokemonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


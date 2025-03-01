import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Importanciones de los componentes
import { ListaFrutasComponent } from './frutas/components/lista-frutas/lista-frutas.component';
import { HakisComponent } from './hakis/components/hakis/hakis.component';
import { PersonajesComponent } from './personajes/components/personajes/personajes.component';
import { EspadasComponent } from './espadas/components/espadas/espadas.component';
import { GearsComponent } from './gears/components/gears/gears.component';
import { FrutaDetalladaComponent } from './frutas/components/fruta-detallada/fruta-detallada.component';

@NgModule({
  declarations: [AppComponent, ListaFrutasComponent, HakisComponent, PersonajesComponent, EspadasComponent, GearsComponent, FrutaDetalladaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

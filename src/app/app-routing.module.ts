import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFrutasComponent } from './frutas/components/lista-frutas/lista-frutas.component';
import { HakisComponent } from './hakis/components/hakis/hakis.component';
import { PersonajesComponent } from './personajes/components/personajes/personajes.component';
import { EspadasComponent } from './espadas/components/espadas/espadas.component';
import { GearsComponent } from './gears/components/gears/gears.component';
import { FrutaDetalladaComponent } from './frutas/components/fruta-detallada/fruta-detallada.component';

const routes: Routes = [
  { path: 'frutas', component: ListaFrutasComponent },
  { path: 'frutas/:id', component: FrutaDetalladaComponent },
  { path: 'hakis', component: HakisComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'espadas', component: EspadasComponent },
  { path: 'gears', component: GearsComponent },
  { path: '', redirectTo: '/frutas', pathMatch: 'full' },
  { path: '**', redirectTo: '/frutas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

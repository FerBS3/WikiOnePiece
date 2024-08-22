import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFrutasComponent } from './frutas/components/lista-frutas/lista-frutas.component';
import { HakisComponent } from './hakis/components/hakis/hakis.component';

const routes: Routes = [
  { path: 'frutas', component: ListaFrutasComponent },
  { path: '', redirectTo: '/frutas', pathMatch: 'full' },
  { path: 'hakis', component: HakisComponent },
  { path: '**', redirectTo: '/frutas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

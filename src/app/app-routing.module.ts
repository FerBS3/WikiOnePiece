import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFrutasComponent } from './components/lista-frutas/lista-frutas.component';

const routes: Routes = [
  { path: 'frutas', component: ListaFrutasComponent },
  { path: '', redirectTo: '/frutas', pathMatch: 'full' },
  { path: '**', redirectTo: '/frutas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

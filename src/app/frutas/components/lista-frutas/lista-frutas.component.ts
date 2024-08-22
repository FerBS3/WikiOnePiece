import { Component, OnInit } from '@angular/core';
import { IFrutas } from '../../interfaces/ifrutas';
import { FrutasService } from '../../services/frutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrl: './lista-frutas.component.scss',
})
export class ListaFrutasComponent implements OnInit {
  vFrutas: IFrutas[] = [];
  searchTerm = '';
  isLoading = true;

  constructor(private frutasSV: FrutasService, private router: Router) {}

  ngOnInit(): void {
    this.getFrutas();
  }

  getFrutas(): void {
    this.frutasSV.getFrutas().subscribe({
      next: (data: IFrutas[]) => {
        this.vFrutas = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false;
      },
    });
  }

  filteredFrutas(): IFrutas[] {
    return this.vFrutas.filter((fruta) =>
      fruta.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/frutas', id]); // Navega a la ruta con el id
  }
}

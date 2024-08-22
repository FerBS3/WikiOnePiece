import { Component, OnInit } from '@angular/core';
import { IFrutas } from '../../interfaces/ifrutas';
import { FrutasService } from '../../services/frutas.service';

@Component({
  selector: 'app-lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrl: './lista-frutas.component.scss',
})
export class ListaFrutasComponent implements OnInit {
  vFrutas: IFrutas[] = [];
  searchTerm = '';
  isLoading = true;
  constructor(private frutasSV: FrutasService) {}

  ngOnInit(): void {
    this.getFrutas();
  }

  getFrutas(): void {
    this.frutasSV.getFrutas().subscribe({
      next: (data: IFrutas[]) => {
        this.vFrutas = data;
        this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false; // Desactiva el estado de carga en caso de error
      },
    });
  }

  filteredFrutas(): IFrutas[] {
    return this.vFrutas.filter((fruta) =>
      fruta.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

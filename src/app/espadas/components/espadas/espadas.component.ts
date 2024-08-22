import { Component, OnInit } from '@angular/core';
import { IEspadas } from '../../interfaces/iespadas';
import { EspadasService } from '../../services/espadas.service';

@Component({
  selector: 'app-espadas',
  templateUrl: './espadas.component.html',
  styleUrl: './espadas.component.scss',
})
export class EspadasComponent implements OnInit {
  vEspadas: IEspadas[] = [];
  isLoading = true;
  searchTerm = '';

  constructor(private espadasService: EspadasService) {}

  ngOnInit(): void {
    this.getEspadas();
  }

  // Método para obtener los datos de la API, y se encarga de la carga
  getEspadas(): void {
    this.espadasService.getEspadas().subscribe({
      next: (data: IEspadas[]) => {
        this.vEspadas = data;
        this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
        console.log(this.vEspadas);
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false; // Desactiva el estado de carga en caso de error
      },
    });
  }
  filteredEspadas(): IEspadas[] {
    if (!this.searchTerm.trim()) {
      return this.vEspadas; // Si el término de búsqueda está vacío, devuelve todas las espadas
    }
    return this.vEspadas.filter((espada) =>
      espada.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

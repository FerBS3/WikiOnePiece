import { Component } from '@angular/core';
import { IGear } from '../../interfaces/igear';
import { GearsService } from '../../services/gears.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrl: './gears.component.scss',
})
export class GearsComponent {
  isLoading = true;
  vTecnicas: IGear[] = [];
  searchTerm = ''; // Propiedad para el término de búsqueda

  constructor(private tecnicasSV: GearsService) {}

  ngOnInit(): void {
    this.getTecnicas();
  }

  getTecnicas(): void {
    this.tecnicasSV.getGears().subscribe({
      next: (data: IGear[]) => {
        this.vTecnicas = data;
        this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
        console.log(this.vTecnicas);
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false; // Desactiva el estado de carga en caso de error
      },
    });
  }

  // Método para filtrar las técnicas según el término de búsqueda
}

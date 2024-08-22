import { Component } from '@angular/core';
import { IFrutas } from '../../interfaces/ifrutas';
import { ActivatedRoute } from '@angular/router';
import { FrutasService } from '../../services/frutas.service';

@Component({
  selector: 'app-fruta-detallada',
  templateUrl: './fruta-detallada.component.html',
  styleUrl: './fruta-detallada.component.scss',
})
export class FrutaDetalladaComponent {
  fruta: IFrutas | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private frutasService: FrutasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const idNumber = +id; // Convierte el parámetro a número
        this.getFruta(idNumber);
      }
    });
  }

  getFruta(id: number): void {
    this.frutasService.getFruta(id).subscribe({
      next: (data: IFrutas) => {
        this.fruta = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false;
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HakisService } from '../../services/hakis.service';
import { IHakis } from '../../interfaces/ihakis';

@Component({
  selector: 'app-hakis',
  templateUrl: './hakis.component.html',
  styleUrl: './hakis.component.scss',
})
export class HakisComponent implements OnInit {
  isLoading = true;
  vHakis: IHakis[] = [];

  constructor(private hakisSV: HakisService) {}

  ngOnInit(): void {
    this.getHakis();
  }
  // Método para obtener los datos de la API, y se encarga de la carga
  getHakis(): void {
    this.hakisSV.getHakis().subscribe({
      next: (data: IHakis[]) => {
        this.vHakis = data;
        this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
        console.log(this.vHakis);
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false; // Desactiva el estado de carga en caso de error
      },
    });
  }
}

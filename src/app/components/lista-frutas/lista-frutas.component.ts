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

  constructor(private frutasSV: FrutasService) {}

  ngOnInit(): void {
    this.getFrutas();
  }

  getFrutas(): void {
    this.frutasSV.getFrutas().subscribe((data) => {
      this.vFrutas = data;
      console.log(this.vFrutas);
    });
  }
  filteredFrutas(): IFrutas[] {
    return this.vFrutas.filter((fruta) =>
      fruta.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

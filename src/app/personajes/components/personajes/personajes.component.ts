import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { IPersonajes } from '../../interfaces/ipersonajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss',
})
export class PersonajesComponent implements OnInit {
  vPersonajes: IPersonajes[] = [];
  isLoading = true;
  searchTerm = '';
  constructor(private personajesSV: PersonajesService) {}

  ngOnInit(): void {
    this.getPersonajes();
  }
  // Método para obtener los datos de la API, y se encarga de la carga
  getPersonajes(): void {
    this.personajesSV.getPersonajes().subscribe({
      next: (data: IPersonajes[]) => {
        this.vPersonajes = data;
        this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
        console.log(this.vPersonajes);
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
        this.isLoading = false; // Desactiva el estado de carga en caso de error
      },
    });
  }

  filteredPersonajes(): IPersonajes[] {
    if (!this.searchTerm.trim()) {
      return this.vPersonajes; // Si el término de búsqueda está vacío, devuelve todos los personajes
    }
    return this.vPersonajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

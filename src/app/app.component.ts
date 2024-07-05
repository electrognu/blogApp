import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogApp';

  constructor() {
    console.log('AppComponent');
  }

  // TODO:
  // esborrar tots els consoles.log
  // se pueden borrar los TouterOutlet de momento no lo usamos
  // crear interfaz
  //Inicializar dos noticias
  // creado componente
  // maquetar areas dentro del componete html y css
  // Recoger datos de componente
  // insertar datos en el array.

}

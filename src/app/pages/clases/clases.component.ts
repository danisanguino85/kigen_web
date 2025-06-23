import { Component, inject } from '@angular/core';
import { CLASES } from '../../db/Clases';
import { Clases } from '../../interfaces/clases';


@Component({
  selector: 'app-clases',
  imports: [],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {

  clases: Clases[] = CLASES

  titulo: string = ''
  texto: string = ''


  onClick(titulo: string) {

    this.titulo = titulo

    const text = CLASES.filter(clase => clase.titulo === titulo)

    this.texto = text[0].texto

  }


}

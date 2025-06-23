import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  router = inject(Router)
  estado: string = 'cerrado'
  switch: boolean = false

  onClick() {

    this.switch = !this.switch

    if (this.switch === true) {
      this.estado = 'abierto'
    }
    if (this.switch === false) {
      this.estado = 'cerrado'
    }

  }
}

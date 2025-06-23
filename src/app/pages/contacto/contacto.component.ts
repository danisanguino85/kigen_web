import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contactoForm: FormGroup = new FormGroup({

    nombre: new FormControl('', []),
    email: new FormControl('', []),
    mensaje: new FormControl('', [])


  });


  onSubmit() {

  }


}

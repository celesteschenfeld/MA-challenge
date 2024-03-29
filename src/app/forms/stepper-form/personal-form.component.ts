import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  isLinear = false; //false hace que el usuario pueda navegar entre los steps libremente.
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  marcas: any = [];

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefono: ['', Validators.required, Validators.maxLength(8)],
      celular: ['', Validators.required, Validators.maxLength(13)],
      ubicacion: ['', Validators.required],
      nacimiento: ['', Validators.required],
      usuario: ['', Validators.required, Validators.minLength(8)],
      contraseña: [
        '',
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
        //expresion regular para: minimo ocho caracteres, al menos una letra, un numero y un caracter especial
      ],
    });
    this.secondFormGroup = this.fb.group({
      marca: ['', Validators.required],
      año: ['', Validators.required],
      modelo: ['', Validators.required],
      version: [''],
    });

    this.vehiculoService.getMarcas().subscribe((marcas) => {
      this.marcas = marcas;
    });
  }
}

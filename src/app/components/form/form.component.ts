import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact: FormGroup
  today: Date = new Date()
  formValide: Boolean = false
  msg: string = ""
  edit: boolean = false
  id: number = 0
  constructor(private _formBuilder: FormBuilder, private local: OperationsService, private router: Router) {



    this.contact = this._formBuilder.group({
      identificacion: new FormControl("",[ Validators.required, Validators.pattern(/^[0-9]\d{6,12}$/) ] ),
      nombre: new FormControl("", Validators.required),
      direccion: new FormControl("", Validators.required),
      celular: new FormControl("", [ Validators.required, Validators.pattern(/^[0-9]\d{6,12}$/) ]),
      fecha: new FormControl("12/12/2020", Validators.required),
    })

  }


  ngOnInit(): void {
    this.checkContact()
  }

  checkContact(){
    console.log(this.local.getContact());

    let getConctact = this.local.getContact()
    console.log("contact",getConctact);

    if(getConctact.nombre){
      console.log("diferente de null");

      this.edit = true
      this.id = getConctact.id
      this.contact.controls.fecha.setValue(getConctact.fecha)
      this.contact.controls.identificacion.setValue(getConctact.identificacion)
      this.contact.controls.nombre.setValue(getConctact.nombre)
      this.contact.controls.direccion.setValue(getConctact.direccion)
      this.contact.controls.celular.setValue(getConctact.celular)
    }

  }


  handleForm(){

    this.checkDate()

    if(this.contact.valid && this.formValide){
      if(this.edit){
        var newFecha = this.contact.value.fecha
        newFecha = moment(newFecha).format("MM/DD/YYYY")
        this.contact.controls.fecha.setValue(newFecha)
        this.local.update(this.contact.value, this.id)
        this.contact.reset()
        this.router.navigate(["/contacts"])
      }else{
        var newFecha = this.contact.value.fecha
        newFecha = moment(newFecha).format("MM/DD/YYYY")
        this.contact.patchValue({ fecha: newFecha })
        this.local.save(this.contact.value)
        this.contact.reset()
        this.router.navigate(["/contacts"])
      }
    }


  }

  goToList(){
    this.router.navigate(["/contacts"])
  }

  checkDate(){

    if(this.contact.value.fecha > this.today){
      this.msg = "La fecha no puede ser mayor al dia actual, intente de nuevo"
      this.formValide = false
    } else {
      this.formValide = true
    }
  }

  ngOnDestroy() {
    this.edit = false
    this.local.setContact({}, null)
  }
}

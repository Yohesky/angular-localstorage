import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OperationsService } from 'src/app/services/operations.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[] = []
  currentPage: number = 1
  p: number = 1;

  constructor(private router: Router, private OperationsService: OperationsService) { }

  ngOnInit(): void {
    this.loadContacts()
  }

  goBack(){
    this.router.navigate(["/"])
  }

  loadContacts(){
   this.contacts = this.OperationsService.show()
   console.log("=> contacts",this.contacts);

  }


  sendContact(contact: object, id: number){
    console.log("contact", contact);
    console.log("id", id);
    this.OperationsService.setContact(contact, id)
    this.router.navigate(["/user"])
  }

  deleteContact(contact: object, id: number){
    Swal.fire({
      title: "¿Seguro/a de eliminar este contacto?",
      icon: "question",
      showCancelButton: true
    }).then(v => {
      if(v.isConfirmed){
        this.OperationsService.delete(contact, id)
        this.loadContacts()
      }

    })
  }

}

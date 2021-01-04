import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  contacts: any = [];
  private contact: any = {}
  constructor() { }

  save(contact: object){
    this.contacts.push(contact)
    localStorage.setItem("contacts", JSON.stringify(this.contacts))
  }

  setContact(contact: object, id: number | any){
    this.contact = contact
    this.contact.id = id
  }

  getContact(){
    return this.contact
  }

  update(contact: object, id:number){
    let fromLs: any = localStorage.getItem("contacts")
    this.contacts = JSON.parse(fromLs);
    this.contacts.splice(id, 1, contact)

    localStorage.setItem("contacts", JSON.stringify(this.contacts))

  }

  show(){
    if(localStorage.getItem('contacts') === null) {
      this.contacts = [];
    } else {
      let fromLs: any = localStorage.getItem("contacts")
      this.contacts = JSON.parse(fromLs);
    }
    return this.contacts;
  }

  delete(contact: object, id:number){
    let fromLs: any = localStorage.getItem("contacts")
    this.contacts = JSON.parse(fromLs);
    this.contacts.splice(id, 1)
    localStorage.setItem("contacts", JSON.stringify(this.contacts))
  }

  allContacts(){
    if(localStorage.getItem("contacts") == null){
      return 0
    }

    let fromLs: any = localStorage.getItem("contacts")
    this.contacts = JSON.parse(fromLs);
    return this.contacts
  }
}

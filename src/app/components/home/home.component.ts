import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numofcontacts: number = 0
  birthdayPeople: number = 0
  contacts: any[] = []
  constructor(private router: Router, private local: OperationsService) { }

  ngOnInit(): void {
    this.getallcontacts()
    this.birthday()
  }

  redirectTo(){
      this.router.navigate(["/contacts"])
  }

  getallcontacts(){

    this.numofcontacts = this.local.allContacts().length
    console.log(this.numofcontacts);

  }

  birthday(){

    let today: string = moment(new Date()).format("MM/DD/YYYY")

    let gettingDate: string = today.substr(0, 5)

    this.contacts = this.local.show()

    this.contacts.map(c => {
      if(c.fecha.substr(0,5) == gettingDate){
        this.birthdayPeople++
      }

    })

    console.log("num of cumpleañeros", this.birthdayPeople);



  }

}

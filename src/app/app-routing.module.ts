import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayPeopleComponent } from './components/birthday-people/birthday-people.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "contacts", component: ContactsComponent
  },
  {
    path: "birthday", component: BirthdayPeopleComponent
  },
  {
    path: "user", component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

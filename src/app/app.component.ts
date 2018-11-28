import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular Master Class';
  contacts: Array<Contact> = {} as Array<Contact>;

  constructor(private contactsService: ContactsService) { }

  public ngOnInit(){
    this.contacts = this.contactsService.getContacts();
  }
}

import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Array<Contact> = {} as Array<Contact>;
  
  constructor(private contactsService: ContactsService) { }

  public ngOnInit(){
    this.contactsService.getContacts()
      .subscribe(contacts => {
          this.contacts = contacts;
      });
  }

}

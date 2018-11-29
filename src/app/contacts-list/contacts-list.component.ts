import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>> = {} as Observable<Array<Contact>>;
  
  constructor(private contactsService: ContactsService) { }

  public ngOnInit(){
    this.contacts = this.contactsService.getContacts();
  }

}

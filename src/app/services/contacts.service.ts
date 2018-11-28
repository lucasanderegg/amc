import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../data/contact-data';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  getContact(id: any): Contact {
    return this.getContacts().find(contact => contact.id.toString() === id);
  }

  constructor() { }

  public getContacts(): Array<Contact> {
    return CONTACT_DATA;
  }
}

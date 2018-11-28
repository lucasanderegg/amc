import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../data/contact-data';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  public getContacts(): Array<Contact> {
    return CONTACT_DATA;
  }
}

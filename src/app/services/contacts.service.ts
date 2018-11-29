import { Injectable, inject, Inject } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../app.tokens';


interface ContactResponse  { item  : Contact    } 
interface ContactsResponse { items : Contact[]  }

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private readonly contacts = 'contacts';
  // private readonly API_ENDPOINT = 'http://localhost:4201/api/'
  private readonly contact = 'contacts/id'

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) { }

  getContact(id: any): Observable<Contact> {
    return this.http.get<ContactResponse>(this.apiEndpoint + this.contact.replace('id', id))
    .pipe(map((data) => data.item));
  }

  getContacts(): Observable<Array<Contact>>{
    return this.http.get<ContactsResponse>(this.apiEndpoint + this.contacts)
      .pipe(map((data) => data.items));
  }

  updateContact(contact: Contact) {
    let url = `${this.apiEndpoint}${this.contacts}/${contact.id}`;

    return this.http.put(url, contact);
  }

  search(term: string): Observable<Array<Contact>> {
    let url = `${this.apiEndpoint}search?text=${term}`;
    return this.http.get<ContactsResponse>(url).pipe(map((data) => data.items))
  }
}

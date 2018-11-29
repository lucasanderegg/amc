import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>> = {} as Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) { }

  public ngOnInit(){
    this.contacts = this.contactsService.getContacts();
    this.terms$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => this.search(term))
  }

  search(nameToSearch){
    this.contacts = this.contactsService.search(nameToSearch);
  }

}

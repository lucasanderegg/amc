import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { Observable, Subject, merge } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, map, takeUntil } from 'rxjs/operators';

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
    const searchResult = this.terms$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term) => this.contactsService.search(term)
      )
    )

    this.contacts = merge(
      searchResult, 
      // takeUntil unsubscribes von getContacts sobald beim subject terms ein neuer wert ankommt
      // man kann in einem ngOnDestroy ein next auf einem eigenen subject machen und im call
      // auf service/observabel takeUntil( destroySubject) 
      // so wird der oberservable sicher immer unsubscribed
      this.contactsService.getContacts().pipe(takeUntil(this.terms$))
      )
  }

}

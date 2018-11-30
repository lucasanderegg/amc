import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { EventBusService } from '../services/event-bus.service';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>

  constructor(private route: ActivatedRoute, private router: Router,
    private contactsService: ContactsService, private eventBus: EventBusService) { }

  ngOnInit() {
    this.contact$ = this.route.data
      .pipe(
        map(data => data['contact']),
        tap(contact => {
          if (contact != null && contact.name != null)
            this.eventBus.emit('appTitleChange', contact.name)
        }));
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact/', contact.id, 'edit'])
  }
}

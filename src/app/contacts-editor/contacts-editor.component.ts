import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { EventBusService } from '../services/event-bus.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact;
  warnOnClosing = true;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute,
    private router: Router, private eventBus: EventBusService) { }

  ngOnInit() {
    this.route.data
    .pipe(map(data => data['contact']))
    .subscribe(contact => {
      this.contact = contact;
      this.eventBus.emit('appTitleChange', `Editing:  ${this.contact.name}`);
    });
  }

  save(contact){
    this.contactsService.updateContact(contact)
    .toPromise().then(ok => {
      this.warnOnClosing = false;
      this.cancel(contact);
    }
      );
  }
  
  cancel(contact){
    this.router.navigate(['contact', this.contact.id]);
  }

}

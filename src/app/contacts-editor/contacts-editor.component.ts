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
  contact: Contact = <Contact>{ address: {}};
  warnOnClosing = true;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute,
    private router: Router, private eventBus: EventBusService) { }

  ngOnInit() {
    // let id = this.route.snapshot.params['id'];
    this.route.data
    .pipe(map(data => data['contact']))
    .subscribe(contact => {
      this.contact = contact;
      this.eventBus.emit('appTitleChange', `Editing:  ${this.contact.name}`);
    });
    
    // this.contactsService.getContact(id).toPromise().then( item => {
    //   this.contact = item;
    //   this.eventBus.emit('appTitleChange', `Editing:  ${this.contact.name}`);
    // })
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

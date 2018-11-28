import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};
  
  constructor(private contactsService: ContactsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).toPromise().then( item => this.contact=item)
  }

  save(contact){
    this.contactsService.updateContact(contact)
    .toPromise().then(ok => this.cancel(contact));
  }
  
  cancel(contact){
    this.router.navigate(['contact', this.contact.id]);
  }

}

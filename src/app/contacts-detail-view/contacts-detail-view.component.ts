import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>

  constructor(private route: ActivatedRoute, private router: Router,
     private contactsService: ContactsService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToEditor(contact: Contact){
    this.router.navigate(['/contact/', contact.id , 'edit'])
  }

  navigateToList(){
    this.router.navigate(['/'])
  }
}

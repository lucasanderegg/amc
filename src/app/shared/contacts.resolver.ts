import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Contact } from "../models/contact";
import { Injectable } from "@angular/core";
import { ContactsService } from "../services/contacts.service";

@Injectable()
export class ContactsResolver implements Resolve<Contact> {
    constructor(private contactsService: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot) {
      return this.contactsService
                 .getContact(route.paramMap.get('id'));
    }
}

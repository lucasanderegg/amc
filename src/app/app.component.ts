import { Component, OnInit } from '@angular/core';
import { EventBusService } from './services/event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular Master Class';
 

  constructor(private eventBus: EventBusService) { }

  public ngOnInit(){
    this.eventBus.observe('appTitleChange')
    .subscribe((data) => this.title = data);
  }
}

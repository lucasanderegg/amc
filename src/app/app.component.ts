import { Component, OnInit } from '@angular/core';
import { EventBusService } from './services/event-bus.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title: Observable<string>;
 

  constructor(private eventBus: EventBusService) { }

  public ngOnInit(){
    this.title = this.eventBus.observe('appTitleChange');
  }
}

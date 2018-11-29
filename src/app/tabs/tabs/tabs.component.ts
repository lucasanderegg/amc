import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() { 
  }

  ngAfterContentInit() {
    this.tabs.first.selected = true
  }

  select(tab: TabComponent){
    this.tabs.find((t) => t.selected === true).selected = false;
    this.tabs.find((t) => t === tab).selected = true;
  }
}

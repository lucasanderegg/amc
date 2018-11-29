import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: Array<TabComponent>

  constructor() { 
    this.tabs = new Array<TabComponent>()
  }

  ngOnInit() {
  }

  addTab(tab: TabComponent){
    this.tabs.push(tab);
    if(this.tabs.length === 1){
      tab.selected = true;
    }
  }

  select(tab: TabComponent){
    this.tabs.find((t) => t.selected === true).selected = false;
    this.tabs.find((t) => t === tab).selected = true;
  }
}

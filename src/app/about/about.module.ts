import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from '../contacts-material.module';

@NgModule({
  imports: [
    // muss hier nochmal importiert werden weil es nicht vom app.module.s geladen werden kann
    // so etwa
    FlexLayoutModule,
    ContactsMaterialModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }

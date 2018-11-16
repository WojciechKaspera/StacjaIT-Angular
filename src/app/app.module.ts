import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent-component/parent.component';
import { ChildComponent } from './child-component/child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { CommunicateService } from './communicate.service';

@NgModule({ 
  declarations: [
    AppComponent, 
    ParentComponent,
    ChildComponent,
    SecondChildComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    CommunicateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

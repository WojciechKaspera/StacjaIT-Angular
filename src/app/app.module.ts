import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrinkListComponent } from './drinkList/drink-list.component';
import { BoardComponent } from './board/board.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrinkListComponent,
    BoardComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

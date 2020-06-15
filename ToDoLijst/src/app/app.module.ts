import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TododetailComponent } from './tododetail/tododetail.component';
import { TodoService } from './Service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TododetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

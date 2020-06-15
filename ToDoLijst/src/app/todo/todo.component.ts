import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos = [];
  constructor(private _todoService : TodoService) { }

  ngOnInit() {
    this.todos=this._todoService.getToDos();
  }

}

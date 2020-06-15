import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  public todos = [];
  constructor(private _todoService : TodoService) { }

  ngOnInit(){
    this.todos=this._todoService.getToDos();
  }

}

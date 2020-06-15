import { Injectable } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';
import { ToDo } from '../Class/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  
  getToDos(){
    return[
      {"id":1,"titel":"Inkopen","beschrijving":"ga naar de winkel en doe de inkopen","done":false},
      {"id":2,"titel":"Koken","beschrijving":"maak het avondmaal klaar","done":false},
      {"id":3,"titel":"Was","beschrijving":"Zet een machine 30° op","done":false},
      {"id":4,"titel":"Tuin","beschrijving":"Maai het gras","done":false},
      {"id":5,"titel":"Afstoffen","beschrijving":"stof de benedenverdieping af","done":false},
    ]; 
  }

}

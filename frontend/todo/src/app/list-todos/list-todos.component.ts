import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  usuarioSS: string = window.sessionStorage.getItem('authenticaterUser')
  mostrarTodos: boolean = true

  message: string = '';
  // = [
  //   new Todo(1, 'Aprender a bailar', false, new Date()),
  //   new Todo(2, 'Ser un experto en Angular', false, new Date()),
  //   new Todo(3, 'Visitar India', false, new Date())
  // ]

  // todo = {
  //   id : 1,
  //   description : 'Aprender a bailar'
  // }

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos(this.usuarioSS).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  
  deleteTodo(id:any){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo(this.usuarioSS,id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:any){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

  saveDone(id, todo){
    todo.done = !todo.done
    this.todoService.updateTodo(this.usuarioSS,id,todo).subscribe()
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  usuarioSS: string = window.sessionStorage.getItem('authenticaterUser')

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo(this.usuarioSS, this.id).subscribe(
        data => {this.todo = data; this.todoForm.patchValue({
          'description': this.todo.description,
          'targetdate':this.todo.targetDate
        })}
      )
    }
  }

  todoForm = new FormGroup({
    description : new FormControl('',[Validators.required,Validators.minLength(5)]),
    targetdate : new FormControl('',Validators.required)
  })

  saveTodo() {
    let fecha = (this.todoForm.get('targetdate').value)
    let fecha2 = new Date(fecha + 'T' + '03:00:00');

    this.todo.description = this.todoForm.get('description').value
    this.todo.targetDate = fecha2
    if (this.id == -1) {
      this.todoService.createTodo(this.usuarioSS, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      );
    } else {
      this.todoService.updateTodo(this.usuarioSS, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      );
    }
  }

}

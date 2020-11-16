import {Component, OnInit} from '@angular/core'
import {delay} from 'rxjs/operators'
import {ToDo, TodosService} from './todos.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: ToDo[] = []

  loading = false

  todoTitle = ''

  constructor(private todosService: TodosService) {}


  ngOnInit(): void {
    this.fetchToDos()
  }


  addToDo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todosService.addToDo({
        title: this.todoTitle,
        completed: false
      }).subscribe( todo => {
      this.todos.push(todo)
      this.todoTitle = ''
    })
  }

  fetchToDos() {
    this.loading = true
    this.todosService.fetchToDos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  removeToDo(id: number) {
    this.todosService.fetchToDos()
      .subscribe(resp => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeToDo(id: number) {
    this.todosService.completeToDo(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true
    })
  }
}

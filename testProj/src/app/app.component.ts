import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {delay} from 'rxjs/operators'
import {ToDo} from './todos.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: ToDo[] = []

  loading = false

  todoTitle = ''

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.fetchToDos()
  }


  addToDo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newToDo: ToDo = {
      title: this.todoTitle,
      completed: false
    }

    this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newToDo)
      .subscribe( todo => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchToDos() {
    this.loading = true
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  removeToDo(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(resp => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
}

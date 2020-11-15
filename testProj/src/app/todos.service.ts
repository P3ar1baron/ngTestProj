import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'


export interface ToDo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addToDo() {
    this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newToDo)
      .subscribe( todo => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }
}

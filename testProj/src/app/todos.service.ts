import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {delay} from "rxjs/operators";


export interface ToDo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addToDo(todo: ToDo): Observable<ToDo> {
     return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo )
  }

  fetchToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(500))
  }

  removeToDo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}

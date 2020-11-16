import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, delay} from 'rxjs/operators'


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

     return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo, {
       headers: new HttpHeaders( {
         MyCustomHeader : Math.random().toString()
       })
     } )
  }

  fetchToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2', {
      params: new HttpParams().set('_limit', '3')
    })
      .pipe(
        delay(500),
        catchError( error => {
          console.log('Error: ', error.message)
          return throwError(error)
        })
      )
  }

  removeToDo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeToDo(id: number): Observable<ToDo> {
    return this.http.put<ToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}

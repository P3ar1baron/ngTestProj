import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'

export interface ToDo {
  completed: boolean
  title: string
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: ToDo[] = []

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.log('Response', todos)
        this.todos = todos
      })
  }


}

import {Component} from '@angular/core'
import {Subscription, Observable} from 'rxjs'
// tslint:disable-next-line:import-spacing
import  {map, filter} from 'rxjs/operators'

export  interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  sub: Subscription

  constructor() {
    const stream$ = new Observable(observer => {

      setInterval(() => {
        observer.next(1)
      }, 500)
    })

    this.sub = stream$
      .subscribe(value => {
        console.log(value)
      })
  }

  stopInterval() {
    this.sub.unsubscribe()
  }
}

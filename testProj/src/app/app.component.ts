import {Component} from '@angular/core'
import {interval, Subscription} from 'rxjs'
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
    const intervalStream$ = interval(1000)

    this.sub = intervalStream$
      .pipe(
        // tslint:disable-next-line:no-bitwise triple-equals
        filter(value => value % 2 === 0),
        map((value) => `Mapped value ${value}`)
      )
      .subscribe((value) => {
      console.log(value)
    })
  }

  stopInterval() {
    this.sub.unsubscribe()
  }
}

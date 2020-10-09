import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // number = 42;
  // arr = [1, 2, 3];
  //
  // obj = {a: 1, b: 2, c: {d: 2}};
  title = 'Dynamic title';

  inputValue = '';

  constructor() {

  }

  // tslint:disable-next-line:typedef
  onInput(event?) {
    console.log('Event', event);
  }
}

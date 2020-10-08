import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg';
      }, 5000);
  }
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = {a: 1, b: 2, c: {d: 2}};

  img = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
}

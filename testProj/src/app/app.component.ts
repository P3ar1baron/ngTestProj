import {Component} from '@angular/core'

export  interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts: Post[] = [
    {title: 'Beer', text: 'Best beer in the world'},
    {title: 'Bread', text: 'Best bread in the world'},
    {title: 'Javascript', text: 'Best language in the world'},
  ]

  search = ''
  searchField = 'title'


  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Vlad Angular'
    })
  }
}

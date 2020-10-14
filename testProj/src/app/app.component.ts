import { Component } from '@angular/core';

export interface  Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу копонты', id: 1},
    {title: 'Следущий блок', text: 'Будет еще про директивы и пйав', id: 2}
  ];

  // tslint:disable-next-line:typedef
  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post', post);
  }
}

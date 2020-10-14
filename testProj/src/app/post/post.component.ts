import {Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }

}

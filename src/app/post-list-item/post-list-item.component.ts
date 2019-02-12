import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.postService.lovePost(post);
  }

  onDoNotLoveIt(post: Post) {
    this.postService.doNotLovePost(post);
  }

  onDelete(post: Post) {
    this.postService.removePost(post);
  }

}

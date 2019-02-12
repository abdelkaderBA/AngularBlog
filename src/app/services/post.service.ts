import { Subject } from 'rxjs/Subject'
import { Post } from '../models/post.models'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  postsSubject = new Subject<any[]>()

  private posts: Array<object> = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi.',
      loveIt: -4,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi.',
      loveIt: 3,
      created_at: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi.',
      loveIt: 0,
      created_at: new Date()
    }
  ]


  emmitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  doNotLovePost(post: Post) {
    post.loveIt--;
  }

  lovePost(post: Post) {
    post.loveIt++;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1);
    this.emmitPostSubject();
  }
}

import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {PostsService} from '../../services/posts.service';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private service: PostsService,
    private commentsService: CommentsService
    ) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
      this.service.getPosts().subscribe(posts=>{
        this.posts = posts;
      });
  }


}

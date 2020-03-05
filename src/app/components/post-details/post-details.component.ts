import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/post';
import {CommentsService} from '../../services/comments.service';
import { Comment as com } from '../../models/comment';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private service: PostsService,
    private commentService: CommentsService
              ) { }

  ngOnInit(): void {
    const postId: number = this.route.snapshot.params['id'];
    this.service.fetchPost(postId).subscribe(post=>{
      this.post = post;

      this.commentService.getCommentsPerPostNoLimit(this.post.id).subscribe(comments=>{
        this.post.comments = comments
      })
    })
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[];
  commentValue: string;
  name: string;
  email: string;
  constructor(private service: CommentsService) { }

  ngOnInit(): void {
    if(this.post){
      this.service.getCommentsPerPost(this.post.id).subscribe(comments=>{
        this.comments = comments
      })
    }
  }


  addComment() {
    if(this.email==="" || this.name === "" || this.commentValue === ""){
      alert("please fill out the form")
    }else{

      const comment = {
        postId: this.post.id,
        name: this.name,
        email: this.email,
        body: this.commentValue
      };
      this.service.addComment(comment).subscribe(res=>{
        this.comments.push(res);
      })
    }
    }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
   posts: Post[];

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this._http.get<Post[]>(`${this.baseUrl}?_limit=10`);
  }


  fetchPost(postId: number): Observable<Post>{
    return this._http.get<Post>(`${this.baseUrl}/${postId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private _http: HttpClient) { }

  getCommentsPerPost(id: number): Observable<Comment[]> {
    console.log(`${this.baseUrl}?${id}`)
    return this._http.get<Comment[]>(`${this.baseUrl}?${id}&_limit=5`);
  }

  getCommentsPerPostNoLimit(id: number): Observable<Comment[]> {
    return this._http.get<Comment[]>(`${this.baseUrl}?${id}`);
  }

  addComment(comment: any): Observable<any> {
    return this._http.post<any>(this.baseUrl, comment, httpOptions);
  }
}

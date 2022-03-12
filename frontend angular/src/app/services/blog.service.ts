import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getData(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl);
  }
}

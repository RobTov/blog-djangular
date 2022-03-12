import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  data: PostModel[];

  ngOnInit(): void {
    this.blogService.getData()
      .subscribe(data => this.data = data)
  }

  printData() {
    this.data.forEach(el => console.log(el))
  }
}

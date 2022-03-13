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
  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.blogService.getData()
    .subscribe(data => this.data = data);
    this.isLoading = false;
  }

  printData() {
    this.data.forEach(el => console.log(el))
  }
}

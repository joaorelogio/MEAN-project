import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts = [
    {
      title: 'First Post',
      content: 'This is the first post\'s content'
    },
    {
      title: 'Second Post',
      content: 'This is the second post\'s content'
    },
    {
      title: 'Third Post',
      content: 'This is the third post\'s content'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

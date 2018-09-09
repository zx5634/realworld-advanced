import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.postId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(query => {
      this.postId = query['id'];
    });
  }

}

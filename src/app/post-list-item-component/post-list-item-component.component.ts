import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {

    
  }

  onLoveIt(){
    this.postLoveIts++;
  }

  onDontLoveIt(){
    this.postLoveIts--;
  }

}

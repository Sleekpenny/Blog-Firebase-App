import { Component, Input, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/backend/service/category-service.service';
import { FrontendService } from '../service/frontend.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{

  @Input() postDetails: Object
 
  constructor(private postCard:FrontendService){}
  ngOnInit(): void {

  }

}

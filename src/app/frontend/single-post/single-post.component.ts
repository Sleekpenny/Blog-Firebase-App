import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendService } from '../service/frontend.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
  postDetails: any;
  similarPost: any  = []

  constructor(private route:ActivatedRoute, private postService:FrontendService){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (data)=>{
       
        this.postService.loadSinglePost(data['id']).subscribe({
          next:(results)=>{
            this.postDetails = results      
           this.loadSimilarPost(this.postDetails.categoryPost.categoryId)
          }
        })
      }
    })
  }

  loadSimilarPost(catId ){
    this.postService.loadSmililarCategory(catId).subscribe({
      next: (results)=>{
      this.similarPost = results    
      }
    })
  }

}

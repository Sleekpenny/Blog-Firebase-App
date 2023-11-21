import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../service/category-service.service';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../interface/categoryInterface';
@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit{
  posts:any = []

  constructor(private fireService: CategoryServiceService, private router:ActivatedRoute){}
 

  ngOnInit(): void {
    this.fireService.loadPost().subscribe({
      next: (data) =>{
        this.posts =  data
        console.log (data)
      }
    })  
  }

  onDelete(pathImage,id){
    this.fireService.deleteOnePost(pathImage,id)
  }

  onFeatured(postId, value){
    const featured = {
      isFeatured: value
    }

    this.fireService.MarkFeatured(postId, featured)
  }

}

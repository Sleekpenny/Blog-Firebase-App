import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontendService } from '../service/frontend.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{

  categoryPost:any =[]
  categoryName:string

  constructor(private route:ActivatedRoute, private category:FrontendService ){}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (data) =>{
        this.categoryName = data['category']
        this.category.loadSingleCategory(data['id']).subscribe({
          next: (results) =>{
            this.categoryPost = results
         
          }
        })   
      }
    })
  }

}

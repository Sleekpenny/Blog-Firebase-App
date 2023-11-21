import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/backend/service/category-service.service';
import { FrontendService } from '../service/frontend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  postDetails:any=[]
  postLatest:any = []

  constructor(private postCard:FrontendService){}

  ngOnInit(): void { 
    this.postCard.loadPost().subscribe({
      next: (data:any) =>{
        console.log (data)
        this.postDetails = data
      }
    })

    this.postCard.loadLatest().subscribe({
      next: (data:any) =>{
        console.log (data)
        this.postLatest = data
      }
    })
  }
 
}

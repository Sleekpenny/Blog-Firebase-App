import { Component, HostListener, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/backend/service/category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  
  CategoryBackend:any =[]
  
  constructor(private loadCategory: CategoryServiceService){}

  ngOnInit(): void {
    this.loadCategory.loadData().subscribe({
      next: (data) => {
        this.CategoryBackend = data
       
      }
    })
  }


  navBg:any;
  navAddBg:any

  @HostListener('document:scroll') scrollover(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

      this.navBg = {    
        'background-color' : 'transparent',    
        'width': '100%'   
      }

      this.navAddBg = {
        'background-color' : '#F9F9F9',  
        'padding' : '4px',
        'border-radius' : '10px',
        'width' : 'fit-content',
        'margin' : 'auto'
     
      }

    }else {
      this.navBg = {}
      this.navAddBg = {}
    }

    
}
}

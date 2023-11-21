import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { categoryData } from '../interface/categoryInterface';
import { CategoryServiceService } from '../service/category-service.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})

export class BlogCategoryComponent implements OnInit{

  constructor (private CateogryService:CategoryServiceService ){}
  categorys:string;
  loadCategory: any =[]
  categoryId : string;
  formStatus:string = 'Add';


  ngOnInit(): void {
  this.CateogryService.loadData().subscribe({
    next: (data)=>{
      this.loadCategory = data
      console.log(this.loadCategory)
    }
  })
  }

  onSubmit(formData){   
    let CategoryData:categoryData = {
      category: formData.value.category
    }

    if (this.formStatus == 'Add' ){
      this.CateogryService.saveCategory(CategoryData)       
    } else if (this.formStatus == 'Push' ){
      this.CateogryService.editCategory(this.categoryId, CategoryData)
      this.formStatus = 'Add'
      formData.reset()
    }   

    formData.reset()
  }

  onEdit(id, data){
    this.categorys = data
    this.formStatus = 'Push'     
    this.categoryId = id

  }

  onDelete(id){
    this.CateogryService.deleteCategory(id)
  }

}

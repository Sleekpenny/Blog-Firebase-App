import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryServiceService } from '../service/category-service.service';
import { postData } from '../interface/categoryInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{
  Titles:string
  Parmalinks:string
  excerpts:string
  posts:string
  Images:string
  contents:string
  ImgSrc:any = 'assets/20231008_004219.jpg'
  selectImg:any
  categoryItems:any = []
  HeaderStatus:string = 'ADD NEW'
  submitStatus:string = 'Save'
  postCollection : any =[]

  constructor(private CategoryService:CategoryServiceService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.CategoryService.loadData().subscribe({
      next: (results)=>{
        this.categoryItems = results        
      }
    })

    this.route.queryParams.subscribe({
      next: (data)=>{
        this.CategoryService.loadOnePost(data['id']).subscribe({
          next: (data)=>{
            this.Titles = data['title'];
            this.excerpts = data['excerpt'];
            this.contents = data['content'];
            this.posts = data['categoryPost["category"]'];
            this.ImgSrc = data['image']
            this.HeaderStatus = 'Edit';
            this.submitStatus = 'Push'
            this.postCollection = data['id']

            this.CategoryService.uploagdImage(this.selectImg, data, this.HeaderStatus, this.postCollection)
            console.log (data)
          }
        })
      }
    })
  }

 

  onTitleChanges($event){
    const title = $event.target.value.replace(/\s/g,'-')
    this.Parmalinks = title
  }

  showPictures($event){
    const reader = new FileReader()
    reader.onload = (e)=> {
      this.ImgSrc = e.target.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectImg = $event.target.files[0]
  }

  
  onSubmit(form:NgForm){
    const formCategory = form.value.categoryPost.split('-')
    

    const postDetails:postData = {
      title: form.value.title,
      excerpt: form.value.excerpt,
      categoryPost: {
        categoryId: formCategory[0],
        category: formCategory[1]
      },
      image: '',
      content: form.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    }

    this.CategoryService.uploagdImage(this.selectImg, postDetails, this.HeaderStatus, this.postCollection)
    form.reset()
    this.ImgSrc = 'assets/20231008_004219.jpg'   
    this.router.navigate(['/login/dashboard/blogPost'])   
  }
}

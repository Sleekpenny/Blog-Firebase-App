import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { SingleCategoryComponent } from './frontend/single-category/single-category.component';
import { SinglePostComponent } from './frontend/single-post/single-post.component';
import { AboutComponent } from './frontend/pages/about/about.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { TermsandConditionComponent } from './frontend/pages/termsand-condition/termsand-condition.component';
import { DashBoardComponent } from './backend/dash-board/dash-board.component';
import { BlogCategoryComponent } from './backend/blog-category/blog-category.component';
import { NewPostComponent } from './backend/new-post/new-post.component';
import { AllPostComponent } from './backend/all-post/all-post.component';
import { LoginPageComponent } from './backend/login-page/login-page.component';
import { authGuard } from './backend/service/guard.guard';


const routes: Routes = [
{path: '', component: HomeComponent},
{path:'category/:category/:id', component: SingleCategoryComponent},
{path: 'posts/:id', component: SinglePostComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'terms', component: TermsandConditionComponent},

{path:'login', component: LoginPageComponent},
{path: 'login/dashboard', component: DashBoardComponent, canActivate: [authGuard]},
{path: 'login/dashboard/categories', component: BlogCategoryComponent, canActivate: [authGuard]},
{path: 'login/dashboard/blogPost/newPost', component: NewPostComponent, canActivate: [authGuard]},
{path: 'login/dashboard/blogPost', component: AllPostComponent, canActivate: [authGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFireStorageModule}  from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/layouts/header/header.component';
import { FooterComponent } from './frontend/layouts/footer/footer.component';

import { CategoriesComponent } from './frontend/layouts/categories/categories.component';
import { HomeComponent } from './frontend/home/home.component';
import { PostCardComponent } from './frontend/post-card/post-card.component';
import { SubscriptionComponent } from './frontend/layouts/subscription/subscription.component';
import { SingleCategoryComponent } from './frontend/single-category/single-category.component';
import { SinglePostComponent } from './frontend/single-post/single-post.component';
import { AboutComponent } from './frontend/pages/about/about.component';
import { TermsandConditionComponent } from './frontend/pages/termsand-condition/termsand-condition.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { CommentComponent } from './frontend/layouts/comment/comment.component';
import { DashBoardComponent } from './backend/dash-board/dash-board.component';
import { BlogCategoryComponent } from './backend/blog-category/blog-category.component';
import { environment } from './environment/environment';
import { NotificationComponent } from './backend/notification/notification.component';
import { NewPostComponent } from './backend/new-post/new-post.component';
import { AllPostComponent } from './backend/all-post/all-post.component';
import { LoginPageComponent } from './backend/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
 
    CategoriesComponent,
      HomeComponent,
      PostCardComponent,
      SubscriptionComponent,
      SingleCategoryComponent,
      SinglePostComponent,
      AboutComponent,
      TermsandConditionComponent,
      ContactComponent,
      CommentComponent,
      DashBoardComponent,
      BlogCategoryComponent,
      NotificationComponent,
      NewPostComponent,
      AllPostComponent,
      LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    AngularFireStorageModule,
    AngularFireAuthModule,  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { map } from 'rxjs';
import { CategoryServiceService } from 'src/app/backend/service/category-service.service';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  constructor(private fireService: AngularFirestore, private notification: CategoryServiceService) { }

  loadPost(){
    return this.fireService.collection('post', ref =>ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  loadLatest(){
    return this.fireService.collection('post', ref =>ref.orderBy('createdAt')).snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  loadSingleCategory(categoryId){

    return this.fireService.collection('post', ref =>ref.where('categoryPost.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
    
  }

  loadSinglePost(id){
    return this.fireService.collection('post').doc(id).valueChanges()      
  }

  loadSmililarCategory(catId){
    return this.fireService.collection('post', ref =>ref.where('categoryPost.categoryId', '==', catId)).snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  subscriptionData(data){
    this.fireService.collection('subscription').add(data).then(()=>{
      this.notification.show('Thanks for Subscribing 👍')
    }).catch(()=>{
      this.notification.show('hu hu there was an error 😔')
    })
  }

  checkSub (subCall){
   return this.fireService.collection('subscription', ref => ref.where('email', '==', subCall)).get()
  }

}


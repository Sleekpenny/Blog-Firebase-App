import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor( private fireService: AngularFirestore, private fireStorage: AngularFireStorage) { }

  saveCategory(data){
    this.fireService.collection('category').add(data).then((data)=>{
      this.show('BoomYa!! Success👍')
    }).catch((error)=>{
      this.show('hu hu there was an error 😔')
    })
  }

  notification$: Subject<string>=new Subject()
  show(text:string){
    this.notification$.next(text)
  }

  get notifications(){
    return this.notification$.asObservable()
  }

  loadData(){
    return this.fireService.collection('category').snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  editCategory(id, data){
    this.fireService.collection('category').doc(id).update(data).then(()=>{
      this.show('BoomYa!! Success👍')
    }).catch(()=>{
      this.show('hu hu there was an error 😔')
    });
  }

  deleteCategory(id){
    this.fireService.collection('category').doc(id).delete().then(()=>{
      this.show('BoomYa!! Success👍')
    }).catch(()=>{
      this.show('hu hu there was an error 😔')
    })
  }

  uploagdImage(selectedImg, postDetails, HeaderStatus, id){
    const FilePath =  `postImg/${Date.now()}`

    this.fireStorage.upload(FilePath, selectedImg).then(()=>{
      this.fireStorage.ref(FilePath).getDownloadURL().subscribe(downloadURL=>{       
        postDetails.image = downloadURL

        if (HeaderStatus == 'Edit'){          
        this.upadateOnePost(id, postDetails)
        } else if (HeaderStatus == 'ADD NEW'){
          this.savePost(postDetails)
        }
      
      })
    })
  }

  savePost(data){
    this.fireService.collection('post').add(data).then(()=>{
      this.show('BoomYa!! Success👍')
    }).catch (err => {
      this.show ('hu hu there was an error 😔')
    })
  }

  loadPost(){
    return this.fireService.collection('post').snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  loadOnePost(id){
    return this.fireService.collection('post').doc(id).valueChanges();    
  }

  upadateOnePost( id, data){
    this.fireService.collection('post').doc(id).update(data).then(()=>{
      this.show('BoomYa!! Success👍')
    }).catch((err)=>{
      this.show('hu hu there was an error 😔')
    })
  }

  deleteOnePost(postPath, id){
    this.fireStorage.refFromURL(postPath).delete()
    this.deletepost(id)
  }

  deletepost(id){
    this.fireService.collection('post').doc(id).delete().then(()=>{
      this.show('BoomYa!! Success👍')
    })
  }

  MarkFeatured(id, data){
    this.fireService.collection('post').doc(id).update(data).then(()=>{
      this.show('BoomYa!! Success👍')
    })
  }
}

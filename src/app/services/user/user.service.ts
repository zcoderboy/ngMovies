import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  addUser(user : User){
    this.firestore.collection('users').add(user);
  }

  getUser(login : string, password : string){
    return this.firestore.collection('users', ref => 
      ref.where('login','==',login) && ref.where('password','==',password)
    )
  }

  setFavorite(favorites : string, docId: string){
    return this.firestore.collection('users').doc(docId).update({
      favorites : favorites
    })
  }

  checkDoc(docId:string){
    return this.firestore.collection('users').doc(docId).get().toPromise().then(function(doc){
      if(doc.exists){
        return true;
      }else{
        return false;
      }
    });
  }
}

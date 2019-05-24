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

  setFavorite(newFavorite : string, docId: string, currentFavorites: string){
    let updatedFavorites: string = '';
    currentFavorites == '' ? updatedFavorites = `${newFavorite}` : updatedFavorites = `${currentFavorites}#${newFavorite}`
    this.firestore.collection('users').doc(docId).update({
      favorites : updatedFavorites
    })
    return updatedFavorites;
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

  unsetFavorite(oldFavorite : string, docId: string, currentFavorites: string){
    let favArray = currentFavorites.split('#');
    let updatedFavorites = '';
    favArray.forEach((fav,index)=>{
      if(index == 0){
        fav != oldFavorite ? updatedFavorites += `${fav}` : ''; 
      }else{
        fav != oldFavorite ? updatedFavorites += `#${fav}` : ''; 
      }
    })
    this.firestore.collection('users').doc(docId).update({
      favorites : updatedFavorites
    })
    return updatedFavorites;
  }
}

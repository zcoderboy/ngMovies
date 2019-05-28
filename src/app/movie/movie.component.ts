import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from '../services/movie/movie.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';
import { HeartBeat } from "../jquery-utils";
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = [];
  connectedUser : User = new User ();
  modal : Object = {};
  favArray = [];
  public static logged : Subject<any> = new Subject();

  constructor(private _movieService:MovieService,private _userService:UserService,private router:Router) {
    this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser'));
  }

  ngOnInit() {
    this._movieService.getAll().subscribe((data)=>{
      this.movies = data.results;
    });
    this._userService.getFavs(JSON.parse(sessionStorage.getItem('docId'))).then((doc)=>this.extractData(doc))
  }

  loadModal(index){
    this.modal = this.movies[index];
  }

  favorite(event,movieId){
    if(HeartBeat(event.target)){
      this.connectedUser.favorites = this._userService.setFavorite(
        movieId,
        JSON.parse(sessionStorage.getItem('docId')),
        this.connectedUser.favorites
      );
      sessionStorage.setItem('connectedUser',JSON.stringify(this.connectedUser));
    }else{
      this.connectedUser.favorites = this._userService.unsetFavorite(
        movieId,
        JSON.parse(sessionStorage.getItem('docId')),
        this.connectedUser.favorites
      );
      sessionStorage.setItem('connectedUser',JSON.stringify(this.connectedUser));
    }; 
  }

  loadFavorites(){
    if(this.connectedUser.favorites != ""){
      this.router.navigate(['/favoris'])
    }else{
      Swal.fire({
        title: '<h5>Vous n\'avez pas de favoris !</h5>',
        type : 'info',
        width:300,
      })
    }
  }

  private extractData(doc: any) {
    let favs = doc.data().favorites.split('#');
    favs.forEach(fav => {
      this.movies.forEach(movie =>{
        if(movie.id == fav){
          movie.liked = true;
        }
      })
    });
    console.log(this.movies);
  }

  logout(){
    sessionStorage.removeItem('connectedUser');
    sessionStorage.removeItem('docId');
    this.router.navigate(['/'])
  }
}

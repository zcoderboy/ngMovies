import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { MovieService } from '../services/movie/movie.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  connectedUser : User = new User ();
  favorites = [] ;
  constructor(private _movieService:MovieService,private _userService:UserService,private router : Router) {
    this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser'));
  }

  ngOnInit() {
    if(this.connectedUser.favorites == ""){
      this.router.navigate(['/home']);
    }else{
      this.favorites = this._movieService.getUserFavorites(this.connectedUser.favorites);
    }
  }
  
  unsetFavorite(index,movieId){
    this.connectedUser.favorites = this._userService.unsetFavorite(
      movieId,
      JSON.parse(sessionStorage.getItem('docId')),
      this.connectedUser.favorites
    );
    this.favorites.splice(index,1);
    sessionStorage.setItem('connectedUser',JSON.stringify(this.connectedUser));
    this.favorites.length == 0 ? this.router.navigate(['/home']) : "";
  }

}

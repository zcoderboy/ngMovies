import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from '../services/movie/movie.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies : any;
  connectedUser : User = new User ();
  modal : Object = {};
  public static logged : Subject<any> = new Subject();

  constructor(private _movieService:MovieService,private _userService:UserService) {
    this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser'));
  }

  ngOnInit() {
    this._movieService.getAll().subscribe((data)=>{
      this.movies = data.results;
    });
  }

  loadModal(index){
    this.modal = this.movies[index];
  }

  favorite(event,movieId){
    // let docId  = JSON.parse(sessionStorage.getItem('docId'));
    // let newFavorites = this._userService.setFavorite(movieId,docId,this.connectedUser.favorites);
    // this.connectedUser.favorites = newFavorites;
    // sessionStorage.setItem('connectedUser',JSON.stringify(this.connectedUser));
  }

}

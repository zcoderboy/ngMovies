import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from '../services/movie/movie.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies : any;
  connectedUser : Object = {};
  modal : Object = {};
  public static logged : Subject<any> = new Subject();

  constructor(private movieService:MovieService) {
    this.connectedUser = JSON.parse(sessionStorage.getItem('connectedUser'));
  }

  ngOnInit() {
    this.movieService.getAll().subscribe((data)=>{
      this.movies = data.results;
    });
  }

  loadModal(index){
    this.modal = this.movies[index];
  }

}

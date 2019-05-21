import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:any
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getAll().subscribe((data)=>{
      this.movies = data.results;
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as api from 'src/app/classes/apiResult';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<api.popularResult>{
    return this.http.get<api.popularResult>(api.buildUrl());
  }

  getUserFavorites(favorites:string){
    let movies = []
    favorites.split('#').forEach((favorite)=>{
      this.http.get<api.favoriteResult>(api.buildUrl(favorite)).subscribe(data:any => {
        movies.push(data);
      });
    })
    return movies;
  }
}

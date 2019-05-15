import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  getAll(){
    //envoyer les requete http vers API
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=c0fe280f740fba250e714fb7aa412a89');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResult } from 'src/app/classes/apiResult';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<apiResult>{
    //envoyer les requete http vers API
    return this.http.get<apiResult>('https://api.themoviedb.org/3/trending/all/day?api_key=c0fe280f740fba250e714fb7aa412a89');
  }
}

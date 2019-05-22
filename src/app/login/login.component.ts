import { Component, OnInit } from '@angular/core';
import {UserService } from '../services/user/user.service';
import { User } from '../models/user.model';
import {Router} from "@angular/router"
import { MovieComponent } from '../movie/movie.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username   : string;
  password   : string;
  loginError : boolean;

  constructor(private _userService : UserService, private _router : Router) { }

  ngOnInit() {
    // this._userService.getUser('test','test').snapshotChanges().subscribe((data)=>{
    //   console.log(data[0].payload.doc.data());
    //   this._userService.setFavorite("fav",data[0].payload.doc.id).then(()=>{
    //     console.log("Updated")
    //   })
    // })
  }

  doLogin(){
    this._userService.getUser(this.username,this.password).snapshotChanges().subscribe((data)=>{
      if(data[0]){
        sessionStorage.setItem('connectedUser',JSON.stringify(data[0].payload.doc.data()));
        sessionStorage.setItem('docId',JSON.stringify(data[0].payload.doc.id));
        this._router.navigate(['/home']);
      }else{
        this.loginError = true;
      }
    })
  }

}

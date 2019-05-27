import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { usedValidator } from '../custom-validators/validator';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  newUser : User = new User();

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get login(){
    return this.registerForm.get('login');
  }
  get password(){
    return this.registerForm.get('password');
  }

  constructor(private _userService : UserService,private router : Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(this.newUser.firstName,
        [Validators.required,Validators.minLength(4),Validators.pattern("^[A-Za-z é]+$")]),
      'lastName': new FormControl(this.newUser.lastName,[Validators.required,Validators.minLength(4),Validators.pattern("^[A-Za-z é]+$")]),
      'login': new FormControl(this.newUser.login,[Validators.required,Validators.pattern("^[A-Za-z0-9 .]{8,}")]),
      'password' : new FormControl(this.newUser.password,[Validators.required,Validators.pattern("[A-Za-z0-9]{8,}")])
    });
  }

  register(){
    this.newUser.favorites = '';
    this._userService.addUser(this.newUser).then(function(){
      this.router.navigate(['/']);
    }).catch(function(){

    })
  }

}

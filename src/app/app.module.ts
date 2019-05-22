import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieService } from './services/movie/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { UserService } from './services/user/user.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

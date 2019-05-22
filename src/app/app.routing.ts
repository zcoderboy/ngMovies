import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'favoris', component: FavoriteComponent},
 {path: 'home', component: MovieComponent,canActivate:[HomeGuard]},
];
export const routing = RouterModule.forRoot(routes);
 
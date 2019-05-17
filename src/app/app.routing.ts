import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'favoris', component: FavoriteComponent},
 {path: 'home', component: MovieComponent},
];
export const routing = RouterModule.forRoot(routes);
 
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
 {path: '', component: LoginComponent},
 //{path: 'login', component: LoginComponent},
 {path: 'home', component: MovieComponent},
];
export const routing = RouterModule.forRoot(routes);
 
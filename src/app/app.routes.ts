import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path: 'home',pathMatch: 'full', redirectTo:''},
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignUpComponent}
];

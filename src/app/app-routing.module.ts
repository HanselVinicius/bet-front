import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { BetsComponent } from './components/bets/bets.component';
import { authenticationGuard } from './guards/AuthGuard';
import { ForbiddenComponent } from './components/error/forbidden/forbidden.component';
import { RegisterFormComponent } from './components/formularios/register/register-form/register-form.component';
import { NotFoundComponent } from './components/error/not_found/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponentComponent
  },
  {
    path:"bets",
    canActivate:[authenticationGuard()],
    component:BetsComponent
  },
  {
    path:"forbidden",
    component:ForbiddenComponent
  },
  {
    path:"register",
    component:RegisterFormComponent
  },{
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

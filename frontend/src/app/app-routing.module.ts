import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'edit/:id' ,component:EditComponent},
  {path:'view/:id' , component:ViewComponent},
  {path:'form', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

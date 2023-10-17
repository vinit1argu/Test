import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'edit/:id' ,component:EditComponent},
  {path:'view' , component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

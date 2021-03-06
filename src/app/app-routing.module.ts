import { LoginGuard } from './guards/login.guard';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   {path:"", pathMatch:"full", component:CarComponent},
   {path:"cars", component:CarComponent},
   {path:"cars/brand/:brandId", component:CarComponent},
   {path:"cars/color/:colorId", component:CarComponent},
   {path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
   {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

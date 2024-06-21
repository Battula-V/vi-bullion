import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path :"",
    component : HomeComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"category",
        component:CategoryComponent
      },
      {
        path:"sub-category",
        component:SubCategoryComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:"**",
        redirectTo:"dashboard"
      }
    ]
  },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

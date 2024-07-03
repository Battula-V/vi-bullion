import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiveRatesComponent } from './components/live-rates/live-rates.component';
import { CoinsRatesComponent } from './components/coins-rates/coins-rates.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
   {
      path:"",
      component:HomeComponent,
      children:[
         {
            path:"",
            component:SectionComponent
         },
         {
            path:"live-rates",
            component:LiveRatesComponent
         },
         {
            path:"coin-rates",
            component:CoinsRatesComponent
         },
         {
            path:"contact-details",
            component:ContactDetailsComponent
         },
         {
            path:"bank-details",
            component:BankDetailsComponent
         },
         {
            path:"calculator",
            component:CalculatorComponent
         },
         {
            path:"contact-us",
            component:ContactUsComponent
         }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LiveRatesComponent } from './components/live-rates/live-rates.component';
import { CoinsRatesComponent } from './components/coins-rates/coins-rates.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    LiveRatesComponent,
    CoinsRatesComponent,
    ContactDetailsComponent,
    BankDetailsComponent,
    CalculatorComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component'
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DesgnitionComponent } from './components/desgnition/desgnition.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from './home.service';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SuperAdminComponent,
    AdminComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DesgnitionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers:[
    HomeService
  ] 
  
})
export class HomeModule {
 
 }

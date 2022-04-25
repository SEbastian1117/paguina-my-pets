import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidebarModule } from 'ng-sidebar';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { HomeComponent } from './home/home.component';
import { MyServicesComponent } from './my-services/my-services.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MyPetsComponent,
    HomeComponent,
    MyServicesComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    SidebarModule.forRoot()
  ]
})
export class ProtectedModule { }

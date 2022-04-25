import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { MyServicesComponent } from './my-services/my-services.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'my-services',
        component: MyServicesComponent
      },
      {
        path: 'my-pets',
        component: MyPetsComponent
      },
      {
        path: '**',
        redirectTo: 'page404'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }

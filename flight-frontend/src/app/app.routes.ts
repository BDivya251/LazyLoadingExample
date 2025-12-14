import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { Userdashboard } from './auth/userdashboard/userdashboard';
import { Admindashboard } from './auth/admindashboard/admindashboard';
import { AddAirlineComponent } from './admin/add-airline/add-airline';
import { AddFlightInventoryComponent } from './admin/add-flight-inventory/add-flight-inventory';
// import { logoutComponent } from './auth/login/login';
export const routes: Routes = [

    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    // {path:'logout',component:logoutComponent},
      { path: 'admin', component: Admindashboard ,
         children: [
      { path: 'add-airline', component: AddAirlineComponent },
      { path: 'add-flightInventory', component: AddFlightInventoryComponent }
    ]
      },
  { path: 'user', component: Userdashboard },
   {path:'**',redirectTo:'login'},
];

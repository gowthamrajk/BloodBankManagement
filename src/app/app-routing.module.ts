import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingdonorComponent } from './addingdonor/addingdonor.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { BloodstockComponent } from './bloodstock/bloodstock.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { RequesthistoryComponent } from './requesthistory/requesthistory.component';
import { RequesthistoryfromuserComponent } from './requesthistoryfromuser/requesthistoryfromuser.component';
import { RouterGuard } from './router.guard';
import { UserGuard } from './user.guard';
import { UserasdonorComponent } from './userasdonor/userasdonor.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent,canActivate:[RouterGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'registrationsuccess',component:RegistrationsuccessComponent},
  {path:'addDonor',component:AddingdonorComponent,canActivate:[AdminGuard]},
  {path:'donorlist',component:DonorlistComponent},
  {path:'userlist',component:UserlistComponent,canActivate:[AdminGuard]},
  {path:'bloodStock',component:BloodstockComponent},
  {path:'bloodStockuser',component:UserdashboardComponent},
  {path:'userprofile',component:UserprofileComponent,canActivate:[UserGuard]},
  {path:'requesthistory',component:RequesthistoryComponent,canActivate:[AdminGuard]},
  {path:'requesthistoryfromuser',component:RequesthistoryfromuserComponent,canActivate:[UserGuard]},
  {path:'requestblood',component:RequestbloodComponent,canActivate:[UserGuard]},
  {path:'userasdonor',component:UserasdonorComponent,canActivate:[UserGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseradminComponent } from './useradmin/useradmin.component';
import { ContentgridComponent } from './contentgrid/contentgrid.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ClaimdetailComponent } from './claimdetail/claimdetail.component';
import { ClaimdashboardComponent } from './claimdashboard/claimdashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-admin', component: UseradminComponent },
  { path: 'claim', component: ClaimdetailComponent },
  { path: 'home', component: ClaimdashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }

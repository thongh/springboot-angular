import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule , MatDividerModule,
         MatListModule, MatCardModule, MatAutocompleteModule, MatInputModule, MatSelectModule,
         MatButtonModule, MatIconModule, MatGridListModule, MatStepperModule, MatTableModule,
         MatExpansionModule} from '@angular/material';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClaimsearchComponent } from './claimsearch/claimsearch.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { ContentgridComponent } from './contentgrid/contentgrid.component';
import { ClaimdetailComponent } from './claimdetail/claimdetail.component';
import { StepperComponent } from './stepper/stepper.component';
import { UseradminComponent } from './useradmin/useradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { ClaimdashboardComponent } from './claimdashboard/claimdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ClaimsearchComponent,
    ClaimstatusComponent,
    ContentgridComponent,
    ClaimdetailComponent,
    StepperComponent,
    UseradminComponent,
    LoginComponent,
    ClaimdashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MglTimelineModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatDividerModule,
    MatListModule, MatCardModule, MatAutocompleteModule, MatInputModule, MatSelectModule, MatButtonModule,
    MatGridListModule, MatStepperModule, MatTableModule, MatExpansionModule, MatIconModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

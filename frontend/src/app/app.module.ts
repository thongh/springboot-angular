import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule , MatDividerModule,
         MatListModule, MatCardModule, MatAutocompleteModule, MatInputModule, MatSelectModule,
         MatButtonModule, MatIconModule, MatGridListModule, MatStepperModule} from '@angular/material';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClaimsearchComponent } from './claimsearch/claimsearch.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { ContentgridComponent } from './contentgrid/contentgrid.component';
import { ClaimdetailComponent } from './claimdetail/claimdetail.component';
import { StepperComponent } from './stepper/stepper.component';
import { UseradminComponent } from './useradmin/useradmin.component';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './useradmin/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ClaimsearchComponent,
    ClaimstatusComponent,
    ContentgridComponent,
    ClaimdetailComponent,
    StepperComponent,
    UseradminComponent
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
    MatGridListModule, MatStepperModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

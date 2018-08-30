import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseradminComponent } from './useradmin/useradmin.component';

const routes: Routes = [
  { path: 'users', component: UseradminComponent }
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

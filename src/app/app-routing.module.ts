import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';

const routes: Routes = [
  {path:"create",component:CreateuserComponent},
  {path:"update/:id",component:CreateuserComponent},
  {path:"display",component:DisplayuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

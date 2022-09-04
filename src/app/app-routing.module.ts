import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeComponent } from './user/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
const routes: Routes = [
  {component : UserLayoutComponent,path : "user",children: [
    {component:HomeComponent,path : "home"}
  ]
  },
  {component : AdminLayoutComponent,path : "admin",children: [
    // {component : AdminComponent,path : "dashboard"}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

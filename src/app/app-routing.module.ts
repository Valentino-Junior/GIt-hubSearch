import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHomeComponent } from './c-home/c-home.component';
import { CRepositoryComponent } from './c-repository/c-repository.component';
import { CUserComponent } from './c-user/c-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';




const routes: Routes = [
  {path:'home', component:CHomeComponent},
  {path:'user', component:CUserComponent},
  {path:'repo', component:CRepositoryComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  // {path:'**', component:NotFoundPageComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

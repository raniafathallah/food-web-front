import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoodComponent } from './components/list-food/list-food.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewFoodComponent } from './components/view-food/view-food.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { EditFoodComponent } from './components/edit-food/edit-food.component';

const routes: Routes = [

  { path: 'list', component: ListFoodComponent },
  { path: 'add', component: AddFoodComponent },

  { path: 'nav', component: NavComponent },
  { path: 'details/:id', component: ViewFoodComponent },

  { path: 'register', component: RegisterUserComponent },

  { path: 'login', component: LoginUserComponent },
  { path: 'edit/:id', component: EditFoodComponent },
  // { path: '/', redirectTo: 'list'},

  {path:'',redirectTo:'list',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

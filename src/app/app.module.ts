import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFoodComponent } from './components/list-food/list-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { MaterialExampleModule } from 'src/material-module';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ViewFoodComponent } from './components/view-food/view-food.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { EditFoodComponent } from './components/edit-food/edit-food.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFoodComponent,
    NavComponent,
    PageNotFoundComponent,
    RegisterUserComponent,
    LoginUserComponent,
    ViewFoodComponent,
    AddFoodComponent,
     EditFoodComponent,

  ],
  imports: [MaterialExampleModule,
    BrowserModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, FormsModule, MatNativeDateModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

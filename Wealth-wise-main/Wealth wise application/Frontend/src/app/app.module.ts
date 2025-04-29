import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { SharedService } from 'src/services/shared/shared.service';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddExpenseService } from 'src/services/add-expense/add-expense.service';
import { FilterByCategoryPipe } from 'src/pipes/filter-by-category.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeachByExpensePipe } from 'src/pipes/seach-by-expense.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ExpenseListComponent,
    NavbarComponent,
    AddExpenseComponent,
    FilterByCategoryPipe,
    SeachByExpensePipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [SharedService, AddExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import {MatDialogModule} from "@angular/material";
import { ApplicationComponent } from './application/application.component';
import { BookingComponent } from './booking/booking.component';
import { UwComponent } from './uw/uw.component';
import { UwService } from './services/uw.service';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    ApplicationComponent,
    BookingComponent,
    UwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [UwService],
  bootstrap: [AppComponent],
  entryComponents: [SearchComponent]
})
export class AppModule { }

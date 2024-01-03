import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { HopmpageIconsComponent } from './components/hopmpage-icons/hopmpage-icons.component';
import { NgOptimizedImage } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { Modal1Component } from './components/modal1/modal1.component';
import { StatementComponent } from './components/statement/statement.component';
import { Details2Component } from './components/details2/details2.component';
import { Modal2Component } from './components/modal2/modal2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    NavigationComponent,
    HeaderComponent,
    HopmpageIconsComponent,
    DetailsComponent,
    Modal1Component,
    StatementComponent,
    Details2Component,
    Modal2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

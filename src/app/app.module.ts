import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoadModule } from './app.load.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FeatureFlagDirective } from './feature-flag.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FeatureFlagDirective
  ],
  imports: [AppLoadModule, AppRoutingModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

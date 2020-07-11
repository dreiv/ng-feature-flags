import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoadModule } from './app.load.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FeatureFlagDirective } from './feature-flag.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, FeatureFlagDirective],
  imports: [AppLoadModule, AppRoutingModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

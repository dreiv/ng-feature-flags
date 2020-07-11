import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoadModule } from './app.load.module';
import { FeatureFlagDirective } from './feature-flag.directive';

@NgModule({
  declarations: [AppComponent, FeatureFlagDirective],
  imports: [AppLoadModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

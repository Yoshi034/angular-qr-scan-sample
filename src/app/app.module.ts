import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScanComponent } from './scan.component';
import { PrescanComponent } from './prescan.component';

@NgModule({
  declarations: [AppComponent, ScanComponent, PrescanComponent],
  imports: [BrowserModule, AppRoutingModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

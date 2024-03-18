import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

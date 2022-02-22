import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { IconComponent } from './icon/icon.component';
import { DesktopComponent } from './desktop/desktop.component';
import { WindowComponent } from './window/window.component';
import { MouseposiDirective } from './mouseposi.directive';



@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    IconComponent,
    DesktopComponent,
    WindowComponent,
    MouseposiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

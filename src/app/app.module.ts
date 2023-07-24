import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormlibModule } from '@yuan/formlib';
import { FormlyDemoModule } from '@yuan/formly-demo';
import { HttpModule } from '@yuan/http';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MenubarModule,
    FormlibModule,
    FormlyDemoModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

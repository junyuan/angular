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
import { AuthModule, HttpModule, LoadingModule } from '@yuan/http';
import { MenubarModule } from 'primeng/menubar';
import { BlockUIModule } from 'primeng/blockui';

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
    HttpModule,
    BlockUIModule,

    AuthModule,
    LoadingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

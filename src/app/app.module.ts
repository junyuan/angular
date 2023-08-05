import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormlibModule } from '@yuan/formlib';
import { FormlyDemoModule } from '@yuan/formly-demo';
import { AuthModule, LoadingModule } from '@yuan/http';
import { BlockUIModule } from 'primeng/blockui';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ConfigService } from './config.service';
import { NxWelcomeComponent } from './nx-welcome.component';

function loadConfig(configService: ConfigService) {
  return () => configService.loadImage();
}

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
    LoadingModule.forRoot('Angular Study'),
    // HttpModule,
    BlockUIModule,

    AuthModule,


  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

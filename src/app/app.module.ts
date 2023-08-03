import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { ConfigService } from './config.service';
import { firstValueFrom } from 'rxjs';

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
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

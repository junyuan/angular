import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, } from '@angular/core';
import { LoadingInterceptor } from './loading.interceptor';
import { LogService } from './log.service';
import { APP_NAME } from './app.name';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LogService,
    { provide: APP_NAME, useValue: 'Loading Module' },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class LoadingModule {
  static forRoot(appName: string): ModuleWithProviders<LoadingModule> {
    return {
      ngModule: LoadingModule,
      providers: [
        { provide: APP_NAME, useValue: appName || '' }
      ]
    }
  }
  static forChild(appName: string): ModuleWithProviders<LoadingModule> {
    return {
      ngModule: LoadingModule,
      providers: [
        { provide: APP_NAME, useValue: appName || '' }
      ]
    }
  }
}

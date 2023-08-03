import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { LoadingService } from './loading.service';
import { LogService } from './log.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService,
    private logService: LogService
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();
    // console.log('show loading');
    this.logService.Log('show loading');
    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
        // console.log('hide loading');
        this.logService.Log('hide loading');
      })
    );
  }
}
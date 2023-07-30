import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Set auth header');
    return next.handle(req).pipe(
      tap(resp => {
        if (resp.type !== 0) {
          console.log('handle auth response');
        }
      }),
      finalize(()=>{
        console.log('finalize auth');
      })
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private response: any;

  constructor(private http: HttpClient) {
  }

  loadImage() {
    return this.http.get(`https://emojihub.yurace.pro/api/random`)
      .pipe(
        tap(resp => {
          this.response = resp;
          console.log(resp);
        })
      );
  }

  getConfig() {
    return this.response;
  }

}
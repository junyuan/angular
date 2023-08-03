import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogService } from '../loading/log.service';
import { APP_NAME } from '../loading/app.name';

@Component({
  selector: 'angular-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  response: any;

  constructor(private httpClient: HttpClient,
    private logService: LogService) {
    this.logService.Log('http component created');
  }

  requestData() {
    this.httpClient.get(`https://emojihub.yurace.pro/api/random`).subscribe(resp => {
      this.response = resp;
      console.log(resp);
    });
  }
}

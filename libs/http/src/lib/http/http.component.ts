import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'angular-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  response: any;

  constructor(private httpClient: HttpClient) {

  }

  requestData() {
    this.httpClient.get(`https://emojihub.yurace.pro/api/random`).subscribe(resp => {
      this.response = resp;
      console.log(resp);
    });
  }
}

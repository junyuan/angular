import { Injectable, Inject } from '@angular/core';
import { APP_NAME } from './app.name';

@Injectable()
export class LogService {
  constructor(@Inject(APP_NAME) private appName: string) {

  }

  Log(log: string) {
    console.log(`-${this.appName}-` + log);
  }
}
import { Component } from '@angular/core';
import { LoadingService } from '@yuan/http';
import { MenuItem } from 'primeng/api';
import { ConfigService } from './config.service';

@Component({
  selector: 'angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  items: MenuItem[] = [
    { label: 'Form', routerLink: '/form' },
    { label: 'Formly', routerLink: '/formly' },
    { label: 'Http', routerLink: '/http' },
    { label: 'Rxjs', routerLink: '/rxjs' },
  ];
  isLoading$ = this.loadingService.loading$;
  response: any;

  constructor(private loadingService: LoadingService, private configService: ConfigService) {
    this.response = this.configService.getConfig();
  }
}

import { Component } from '@angular/core';
import { LoadingService } from '@yuan/http';
import { MenuItem } from 'primeng/api';
import { ConfigService } from './config.service';
import { ChildrenOutletContexts } from '@angular/router';
import { routerTransition } from '@yuan/anim';

@Component({
  selector: 'angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  title = 'angular';
  items: MenuItem[] = [
    { label: 'Form', routerLink: '/form' },
    { label: 'Formly', routerLink: '/formly' },
    { label: 'Http', routerLink: '/http' },
    { label: 'Rxjs', routerLink: '/rxjs' },
    { label: 'Anim', routerLink: '/anim' },
  ];
  isLoading$ = this.loadingService.loading$;
  response: any;

  constructor(private loadingService: LoadingService,
    private configService: ConfigService,
    private contexts: ChildrenOutletContexts) {
    this.response = this.configService.getConfig();
  }

  getRouterTransition() {
    // return Math.random() + '';
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['state'];
  }
}

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  ];
}

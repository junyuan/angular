import { Route } from '@angular/router';
import { FormlibComponent } from '@yuan/formlib';

export const appRoutes: Route[] = [
  { path: 'form', component: FormlibComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

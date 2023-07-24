import { Route } from '@angular/router';
import { FormlibComponent } from '@yuan/formlib';
import { FormlyDemoComponent } from '@yuan/formly-demo';
import { HttpComponent } from '@yuan/http';

export const appRoutes: Route[] = [
  { path: 'form', component: FormlibComponent, pathMatch: 'full' },
  { path: 'formly', component: FormlyDemoComponent, pathMatch: 'full' },
  { path: 'http', component: HttpComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

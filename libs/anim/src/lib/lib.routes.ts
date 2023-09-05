import { Route } from '@angular/router';
import { AnimComponent } from './anim/anim.component';

export const animRoutes: Route[] = [
  { path: '', component: AnimComponent, pathMatch: 'full' }
];

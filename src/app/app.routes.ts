import { Route } from '@angular/router';
import { FormlibComponent } from '@yuan/formlib';
import { FormlyDemoComponent } from '@yuan/formly-demo';

export const appRoutes: Route[] = [
  { path: 'form', component: FormlibComponent, pathMatch: 'full', data: { state: 'form' } },
  { path: 'formly', component: FormlyDemoComponent, pathMatch: 'full', data: { state: 'formly' } },
  // { path: 'http', component: (HttpComponent), pathMatch: 'full' },
  { path: 'http', loadChildren: () => import(`libs/http/src/lib/http.module`).then(m => m.HttpModule), pathMatch: 'full', data: { state: 'http' } },
  { path: 'rxjs', loadChildren: () => import(`libs/rxjs/src/lib/rxjs.module`).then(m => m.RxjsModule), pathMatch: 'full', data: { state: 'rxjs' } },
  { path: 'anim', loadChildren: () => import(`libs/anim/src/lib/anim.module`).then(m => m.AnimModule), pathMatch: 'full', data: { state: 'anim' } },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

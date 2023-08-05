import { Route } from '@angular/router';
import { FormlibComponent } from '@yuan/formlib';
import { FormlyDemoComponent } from '@yuan/formly-demo';

export const appRoutes: Route[] = [
  { path: 'form', component: FormlibComponent, pathMatch: 'full' },
  { path: 'formly', component: FormlyDemoComponent, pathMatch: 'full' },
  // { path: 'http', component: (HttpComponent), pathMatch: 'full' },
  { path: 'http', loadChildren: () => import(`libs/http/src/lib/http.module`).then(m => m.HttpModule), pathMatch: 'full' },
  { path: 'rxjs', loadChildren: () => import(`libs/rxjs/src/lib/rxjs.module`).then(m => m.RxjsModule), pathMatch: 'full' },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];

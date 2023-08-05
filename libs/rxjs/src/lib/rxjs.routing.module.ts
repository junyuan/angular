import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes = [
  { path: '', component: RxjsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class RxjsRoutingModule { }

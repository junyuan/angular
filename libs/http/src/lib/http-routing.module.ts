import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpComponent } from './http/http.component';

const routes = [
  { path: '', component: HttpComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class HttpRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http/http.component';
import { ButtonModule } from 'primeng/button';
import { LoadingModule } from './loading/loading.module';
import { HttpRoutingModule } from './http-routing.module';

@NgModule({
  imports: [CommonModule, ButtonModule, LoadingModule.forChild('Http Module'), HttpRoutingModule],
  declarations: [HttpComponent],
})
export class HttpModule { }

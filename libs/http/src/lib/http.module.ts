import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http/http.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [HttpComponent],
})
export class HttpModule { }

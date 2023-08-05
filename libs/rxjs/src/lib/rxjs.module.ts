import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsRoutingModule } from './rxjs.routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule, RxjsRoutingModule],
  declarations: [RxjsComponent],
  exports: [RxjsComponent],
})
export class RxjsModule { }

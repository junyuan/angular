import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxModule } from '@ngx-formly/primeng/checkbox';
import { FormlyInputModule } from '@ngx-formly/primeng/input';
import { FormlySelectModule } from '@ngx-formly/primeng/select';
import { FormlyDemoComponent } from './formly-demo.component';

@NgModule({
  imports: [CommonModule, FormlyModule, FormlyInputModule, FormlySelectModule, FormlyCheckboxModule],
  declarations: [FormlyDemoComponent],
  // exports:[FormlyDemoComponent]
})
export class FormlyDemoModule { }

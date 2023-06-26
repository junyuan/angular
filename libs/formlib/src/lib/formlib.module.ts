import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlibComponent } from './formlib.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [FormlibComponent],
  exports: [FormlibComponent]
})
export class FormlibModule { }

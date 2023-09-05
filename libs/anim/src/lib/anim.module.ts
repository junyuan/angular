import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { animRoutes } from './lib.routes';
import { AnimComponent } from './anim/anim.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(animRoutes), RouterModule, ButtonModule],
  declarations: [AnimComponent],
})
export class AnimModule { }

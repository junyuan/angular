import { ChangeDetectionStrategy, Component } from '@angular/core';
import { openClose } from '../animations';

@Component({
  selector: 'angular-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [openClose()]
})
export class AnimComponent {
  isClose = false;

  toggle() {
    this.isClose = !this.isClose;
  }
}

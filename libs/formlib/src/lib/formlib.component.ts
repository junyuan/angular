import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-formlib',
  templateUrl: './formlib.component.html',
  styleUrls: ['./formlib.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlibComponent {
  titles = new FormArray(
    [
      new FormControl('1'),
      new FormControl('2')
    ]
  )

  form = new FormGroup({
    name: new FormControl('abc', Validators.required),
    titles: this.titles
  });


  addArrayItem() {
    const titles = this.form.get('titles') as FormArray;
    titles.push(new FormControl(''))
  }

}

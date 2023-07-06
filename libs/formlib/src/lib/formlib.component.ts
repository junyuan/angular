import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-formlib',
  templateUrl: './formlib.component.html',
  styleUrls: ['./formlib.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlibComponent implements OnInit {
  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.warn(value);
    })
  }
  titles = new FormArray(
    [
      new FormGroup({
        country: new FormControl('1'),
        city: new FormControl('3'),
      }),
      new FormGroup({
        country: new FormControl('2'),
        city: new FormControl('4'),
      }),
    ]
  )

  form = new FormGroup({
    name: new FormControl('abc', Validators.required),
    titles: this.titles,
    address: new FormGroup({
      'address1': new FormControl(),
      'address2': new FormControl(),
    })
  });


  addArrayItem() {
    const titles = this.form.get('titles') as FormArray;
    titles.push(new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
    }))
  }

}

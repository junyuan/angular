import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, debounce, debounceTime, filter, map, tap } from 'rxjs';

@Component({
  selector: 'angular-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent {

  countSub = new BehaviorSubject<number>(0); //new Subject<number>();

  clickSub = new Subject<void>();

  count$: Observable<number> = this.countSub.asObservable()
    .pipe(
    // tap(number => {
    //   console.log(number);
    // }),
    // map(number => {
    //   return number * 2;
    // }),
    // filter(number => {
    //   return number % 4 == 0;
    // })
  );

  constructor() {
    this.clickSub.asObservable()
      .pipe(
        debounceTime(500),
      )
      .subscribe(() => {
        this.countSub.next(this.countSub.value + 1);
      });
  }

  increse(event: MouseEvent) {
    this.clickSub.next();
  }

}

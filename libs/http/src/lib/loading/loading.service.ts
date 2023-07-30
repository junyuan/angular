import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {

  private loadSub = new BehaviorSubject<boolean>(false);
  loading$ = this.loadSub.asObservable();

  showLoading() {
    this.loadSub.next(true);
  }

  hideLoading() {
    this.loadSub.next(false);
  }

}
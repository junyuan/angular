import { trigger, transition, animate, state, style, animateChild, group, query } from "@angular/animations";

export function openClose(openHeight?: string, closeHeight?: string) {
  return trigger('openClose', [
    transition('open => close', [animate('1s')]),
    transition('close => open', [animate('0.3s')]),
    state('open', style({ height: openHeight || '50px', background: 'red' })),
    state('close', style({ height: closeHeight || '0px', background: 'blue' })),
  ])
}

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1.0s ease-in-out', style({transform: 'translateX(-100%)'}))
      ]),
      query(':enter', [
        animate('1.0s ease-in-out', style({transform: 'translateX(0%)'})),
        animateChild()
      ])
    ]),
  ]),
]);
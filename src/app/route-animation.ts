import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'scale(0.9) translateX(-100%)' }), // Initial state from the left side
    animate('0.7s ease-in-out', style({ opacity: 1, transform: 'scale(1) translateX(0)' })), // Final state
  ]),
]);

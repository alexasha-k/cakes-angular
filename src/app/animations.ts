import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

export const scrollAnimation = trigger('blockIsVisible', [
  state('hidden', style({opacity: 0})),
  state('visible', style({opacity: 1})),
  transition('hidden => visible', [
    animate(500)
  ])
])

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimation', [

    /**
     * Home
     */
    transition('Home => Projects', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ]),

    transition('Projects => Home', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
    ]),
    // end Home

    /**
     * Search Results
     */
    transition('Home => SearchResults', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ]),

    transition('SearchResults => Home', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateY(0%)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
    ]),

    transition('SearchResults => Projects', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'scale(1)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'scale(0)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'scale(0)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'scale(1)' }))
        ], { optional: true }),
      ])
    ]),
    // end SearchResults

    transition('Home => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),

    transition('Projects => *', [
      query(':enter, :leave',
        style({ position: 'fixed',  width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),

  ]);

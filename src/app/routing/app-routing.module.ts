import { Routes } from '@angular/router';
import { CoreComponent } from '../cards/core.component';
import { LandingComponent } from '../cards/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'meet-me',
        component: LandingComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { CoreComponent } from '../cards/core.component';
import { LandingComponent } from '../cards/landing/landing.component';
import { entryPointGuard } from './guards/entrypoint.guard';

export const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [entryPointGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'meet-me',
        component: LandingComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

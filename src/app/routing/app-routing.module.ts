import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../cards/core.component';
import { LandingComponent } from '../cards/quiz/landing/landing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

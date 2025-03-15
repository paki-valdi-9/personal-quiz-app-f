import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

export const entryPointGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const router = inject(Router);

  if (state.url.includes('/quiz') && !state.url.endsWith('/quiz')) {
    router.navigate(['/quiz'], {
      replaceUrl: true,
      onSameUrlNavigation: 'reload',
    });
    return of(false);
  }

  if (
    state.url.endsWith('/') ||
    (!state.url.endsWith('/meet-me') && !state.url.endsWith('/quiz'))
  ) {
    router.navigate(['/meet-me'], {
      replaceUrl: true,
      onSameUrlNavigation: 'reload',
    });
    return of(false);
  }
  return of(true);
};

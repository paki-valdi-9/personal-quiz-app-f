import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { entryPointGuard } from './entrypoint.guard';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

describe('EntrypointGuard', () => {
  let mockRouter: Partial<Router>;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;

  let result$: Observable<boolean>;

  //Mock Dependencies
  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn(),
    };
    mockRoute = {} as ActivatedRouteSnapshot;
    mockState = {
      url: '/',
    } as RouterStateSnapshot;
  });
  it('should navigate to meet-me if path ends with /', () => {
    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalse();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/meet-me'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });

  it('should navigate to meet-me if path does not ends with meet-me', () => {
    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalse();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/meet-me'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });
});

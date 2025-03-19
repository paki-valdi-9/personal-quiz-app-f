import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { entryPointGuard } from './entrypoint.guard';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { MockService } from 'ng-mocks';

describe('EntrypointGuard', () => {
  let mockRouter: Router;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;

  let result$: Observable<boolean>;

  //Mock Dependencies
  beforeEach(() => {
    mockRouter = MockService(Router);
    mockRoute = {} as ActivatedRouteSnapshot;
    mockState = {
      url: '/',
    } as RouterStateSnapshot;
  });

  it('should navigate to meet-me if path ends with /', () => {
    const navigateSpy = jest.spyOn(mockRouter, 'navigate');

    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalsy();
      expect(navigateSpy).toHaveBeenCalledWith(['/meet-me'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });

  it('should navigate to meet-me if path does not ends with meet-me', () => {
    const navigateSpy = jest.spyOn(mockRouter, 'navigate');

    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalsy();
      expect(navigateSpy).toHaveBeenCalledWith(['/meet-me'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });

  it('should navigate to quiz if path includes quiz', () => {
    const navigateSpy = jest.spyOn(mockRouter, 'navigate');

    mockState = {
      url: '/quiz',
    } as RouterStateSnapshot;
    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalsy();
      expect(navigateSpy).toHaveBeenCalledWith(['/quiz'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });

  it('should navigate to quiz if path includes quiz and does not ends with quiz', () => {
    const navigateSpy = jest.spyOn(mockRouter, 'navigate');

    mockState = {
      url: '/quiz/a',
    } as RouterStateSnapshot;
    TestBed.runInInjectionContext(() => {
      result$ = entryPointGuard(mockRoute, mockState) as Observable<boolean>;
    });

    result$.subscribe((result) => {
      expect(result).toBeFalsy();
      expect(navigateSpy).toHaveBeenCalledWith(['/quiz'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });
});

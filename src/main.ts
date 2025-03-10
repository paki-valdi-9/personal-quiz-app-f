import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    // provideStore(reducers, {
    //     runtimeChecks: {
    //       strictStateImmutability: true,
    //       strictActionImmutability: true,
    //     }
    //   }),
    // provideEffects(effects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: false,
    }),
    provideHttpClient(),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));

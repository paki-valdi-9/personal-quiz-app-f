import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/routing/app-routing.module';
import { QuestionnaireFeature } from './app/cards/questionnaire/store/feature';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { QuizEffects } from './app/cards/questionnaire/store/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideStore(
      {
        [QuestionnaireFeature.name]: QuestionnaireFeature.reducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    provideEffects([QuizEffects]),
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

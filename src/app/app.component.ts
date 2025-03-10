import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    // BrowserModule,
    // CommonModule,
    // BrowserAnimationsModule,
    // AppRoutingModule,
    // RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  _route: string | undefined;

  @Input() get route(): string | undefined {
    return this._route;
  }
  ngOnInit(): void {
    // tslint:disable-next-line:no-console
    console.log('App Component Initialized');
  }
  title = 'temp-folder';
}

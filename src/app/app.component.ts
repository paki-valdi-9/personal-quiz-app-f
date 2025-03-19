import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'quiz-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './styles/main.scss'],
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  _route: string | undefined;

  @Input() get route(): string | undefined {
    return this._route;
  }
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'quiz-app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class LandingViewComponent {}

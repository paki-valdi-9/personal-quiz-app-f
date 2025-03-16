import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'quiz-app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class QuestionnaireViewComponent {
  public onBackClick = () => {
    this.router.navigate(['/meet-me'], {
      replaceUrl: true,
      onSameUrlNavigation: 'reload',
    });
  };

  public onQuestionnaireBackClick = () => {
    console.log('navigating questionnaire back');
  };

  public onQuestionnaireForwardClick = () => {
    console.log('navigating questionnaire forward');
  };

  constructor(private readonly router: Router) {}
}

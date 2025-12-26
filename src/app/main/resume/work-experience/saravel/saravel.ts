import { Component } from '@angular/core';
import { WorkExperienceItem } from '../work-experience-item/work-experience-item';
import { ResumeItemComponent } from '../../resume-section/resume-item/resume-item';

@Component({
  selector: 'app-saravel',
  imports: [
    WorkExperienceItem,
    ResumeItemComponent
  ],
  templateUrl: './saravel.html',
  styleUrl: './saravel.scss',
})
export class Saravel {

}

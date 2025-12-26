import { Component } from '@angular/core';
import { WorkExperienceItem } from '../work-experience-item/work-experience-item';
import { ResumeItemComponent } from '../../resume-section/resume-item/resume-item';

@Component({
  selector: 'app-telepain',
  imports: [
    WorkExperienceItem,
    ResumeItemComponent
  ],
  templateUrl: './telepain.html',
  styleUrl: './telepain.scss',
})
export class Telepain {

}

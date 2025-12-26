import { Component } from '@angular/core';
import { WorkExperienceItem } from '../work-experience-item/work-experience-item';
import { ResumeItem } from '../../model/ResumeItem';
import { ResumeItemComponent } from '../../resume-section/resume-item/resume-item';

@Component({
  selector: 'app-cobel',
  imports: [
    WorkExperienceItem,
    ResumeItemComponent
  ],
  templateUrl: './cobel.html',
  styleUrl: './cobel.scss',
})
export class Cobel {

}

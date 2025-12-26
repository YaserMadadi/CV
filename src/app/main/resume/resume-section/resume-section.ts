import { Component, Input } from '@angular/core';
import { ResumeItemComponent } from './resume-item/resume-item';
import { ResumeSection } from '../model/ResumeSection';

@Component({
  selector: 'app-resume-section',
  imports: [
  ],
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.scss',
})
export class ResumeSectionComponent {

  @Input()
  Title!: string;

}

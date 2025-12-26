import { Component, OnInit } from '@angular/core';
import { ResumeSection } from './model/ResumeSection';
import { ResumeItem } from './model/ResumeItem';
import { ResumeSectionComponent } from './resume-section/resume-section';
import { ResumeItemComponent } from './resume-section/resume-item/resume-item';
import { WorkExperienceItem } from './work-experience/work-experience-item/work-experience-item';
import { WorkExperience } from './work-experience/work-experience';

@Component({
  selector: 'app-resume',
  imports: [
    ResumeSectionComponent,
    ResumeItemComponent,
    WorkExperience
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {

  Sections: ResumeSection[] = [];

  ngOnInit() {

    // let items: ResumeItem[] = [];

    // this.Sections.push(new ResumeSection(1, 'Summary', items));

    // items.push(new ResumeItem('Yaser Madadi', '',))

  }

}

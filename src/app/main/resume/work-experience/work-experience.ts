import { Component } from '@angular/core';
import { Telepain } from './telepain/telepain';
import { Cobel } from './cobel/cobel';
import { Saravel } from './saravel/saravel';
import { ResumeSectionComponent } from '../resume-section/resume-section';

@Component({
  selector: 'app-work-experience',
  imports: [
    Telepain,
    Cobel,
    Saravel,
    ResumeSectionComponent
  ],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience {

}

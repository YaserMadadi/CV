import { Component, Input } from '@angular/core';
import { ResumeItem } from '../../model/ResumeItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-item',
  imports: [
    CommonModule
  ],
  templateUrl: './resume-item.html',
  styleUrl: './resume-item.scss',
})
export class ResumeItemComponent {

  constructor() {
    this.Period.length == 0
  }

  @Input() Title!: string;
  @Input() Period: string = '';
  @Input() Description!: string;
  @Input() subDescription: string = '';

}

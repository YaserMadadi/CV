import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience-item',
  imports: [],
  templateUrl: './work-experience-item.html',
  styleUrl: './work-experience-item.scss',
})
export class WorkExperienceItem {

  constructor() {

  }

  public item_id: string = crypto.randomUUID();

  public collaps_ID: string = crypto.randomUUID();

  @Input()
  Title: string = '';

  @Input()
  parentID: string = '';


}

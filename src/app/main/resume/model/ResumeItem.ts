import { Input } from "@angular/core";

export class ResumeItem {

  constructor(title: string, period: string, description: string) {
    this.Title = title;
    this.Period = period;
    this.Description = description;
  }

  Title: string = '';

  Period: string = '';

  Description: string = '';

}
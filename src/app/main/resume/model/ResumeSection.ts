import { ResumeItem } from "./ResumeItem";

export class ResumeSection {

  constructor(index: number, title: string, items: ResumeItem[]) {
    this.Index = index;
    this.Title = title;
    this.Items = items;
  }

  Index: number;

  Title: string;

  Items: ResumeItem[];

}
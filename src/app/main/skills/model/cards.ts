import { Skill } from "./skill";

export class Card {
  constructor(index: number, title: string, icon: string, skillItems: Skill[]) {
    this.index = index;
    this.title = title;
    this.icon = icon;
    this.SkillItems = skillItems;
  }

  public index: number = 0;
  public title: string = '';
  public icon: string = '';
  public SkillItems: Skill[] = [];
}
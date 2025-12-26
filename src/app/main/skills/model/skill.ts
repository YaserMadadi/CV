export class Skill {
  constructor(title: string, progress: number, description: string = '') {
    this.title = title;
    this.progress = progress;
    this.description = description;
  }
  public title: string;
  public progress: number;
  public description: string;
}
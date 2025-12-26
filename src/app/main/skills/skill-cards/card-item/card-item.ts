import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.html',
  styleUrl: './card-item.scss',
})
export class CardItem {

  @Input()
  public progress: number = 50;

  @Input()
  public name: string = 'noname';

  @Input() description: string = '';

}

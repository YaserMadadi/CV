import { Component, Input } from '@angular/core';
import { Card, Skill } from '../model'
import { CardItem } from './card-item/card-item';

@Component({
  selector: 'app-skill-cards',
  imports: [
    CardItem
  ],
  templateUrl: './skill-cards.html',
  styleUrl: './skill-cards.scss',
})
export class SkillCards {

  @Input() Cards: Card[] = [];

}

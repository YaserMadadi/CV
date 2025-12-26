import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  imports: [],
  templateUrl: './testimonial-item.html',
  styleUrl: './testimonial-item.scss',
})
export class TestimonialItem {

  @Input()
  name: string = '';

  @Input()
  position: string = '';

  @Input()
  pictureUrl: string = '';

}

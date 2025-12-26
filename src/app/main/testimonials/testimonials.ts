import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TestimonialItem } from './testimonial-item/testimonial-item';

@Component({
  selector: 'app-testimonials',
  imports: [
    TestimonialItem
  ],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {

}

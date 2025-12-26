import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Services } from './services/services';
import { Skills } from './skills/skills';
import { Stats } from './stats/stats';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-main',
  imports: [
    Hero,
    AboutMe,
    Contact,
    Portfolio,
    Resume,
    Services,
    Skills,
    Stats,
    Testimonials,

  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}

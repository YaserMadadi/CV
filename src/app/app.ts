import { AfterViewInit, Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { register } from 'swiper/element/bundle';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Main,
    Footer,

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  protected readonly title = signal('YaserProfile');

  ngAfterViewInit(): void {

    register();

    AOS.init({
      duration: 600,
      once: true
    });
  }
}

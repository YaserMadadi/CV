import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {

  @ViewChild('typed', { static: true })
  typed!: ElementRef;


  ngAfterViewInit(): void {

    const items =
      this.typed.nativeElement
        .getAttribute('data-typed-items')
        .split(',')
        .map((item: string) => item.trim());

    new Typed(this.typed.nativeElement, {
      strings: items,
      loop: true,
      typeSpeed: 140,
      backSpeed: 70,
      backDelay: 1000
    });
  }




}

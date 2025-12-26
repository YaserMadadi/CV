import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  imports: [],
  templateUrl: './service-item.html',
  styleUrl: './service-item.scss',
})
export class ServiceItem {

  @Input()
  serviceTitle: string = '';

  @Input()
  serviceDescription: string = '';

  @Input()
  iconClass: string = '';

  @Input()
  colorClass: string = '';
}

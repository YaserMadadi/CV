import { Component } from '@angular/core';
import { ServiceItem } from './service-item/service-item';

@Component({
  selector: 'app-services',
  imports: [
    ServiceItem
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}

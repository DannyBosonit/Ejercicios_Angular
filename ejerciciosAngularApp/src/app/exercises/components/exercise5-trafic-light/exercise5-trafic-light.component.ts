import { Component, OnInit } from '@angular/core';
import { TrafficLightService } from '../../services/traffic-light.service';

@Component({
  selector: 'app-exercise5-trafic-light',
  templateUrl: './exercise5-trafic-light.component.html',
  styleUrl: './exercise5-trafic-light.component.css',
})
export class Exercise5TraficLightComponent implements OnInit {
  public colorActive!: string;

  constructor(private trafficService: TrafficLightService) {}

  ngOnInit(): void {
    this.trafficService.turnLightColors.subscribe({
      next: (color) => (this.colorActive = color),
    });
  }

  switchLight($event: any) {
    this.trafficService.turnOnOff($event);
  }
}

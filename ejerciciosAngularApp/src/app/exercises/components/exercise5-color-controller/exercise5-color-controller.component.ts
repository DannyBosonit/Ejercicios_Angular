import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrafficLightService } from '../../services/traffic-light.service';

@Component({
  selector: 'app-exercise5-color-controller',
  templateUrl: './exercise5-color-controller.component.html',
  styleUrl: './exercise5-color-controller.component.css',
})
export class Exercise5ColorControllerComponent implements OnInit {
  public colorActive!: string;

  @Output()
  public turnOnLight = new EventEmitter<boolean>();

  public switchBoolean: boolean = false;

  constructor(private trafficService: TrafficLightService) {}

  ngOnInit(): void {
    this.trafficService.turnLightColors.subscribe({
      next: (color) => {
        this.colorActive = color;
      },
    });
  }

  switchLight() {
    this.switchBoolean = !this.switchBoolean;
    this.turnOnLight.emit(this.switchBoolean);
  }
}

import { Component, OnInit } from '@angular/core';
import { StateInfo } from '../../interfaces/exercise6.interface';
import { CovidService } from '../../services/covid.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-exercise6-page',
  templateUrl: './exercise6-page.component.html',
  styles: ``,
})
export class Exercise6PageComponent implements OnInit {
  public statesInfo: StateInfo[] = [];
  public statesNames: String[] = [];
  public positivecases: number[] = [];

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getStatesCovisInfo().subscribe((statesInfo) => {
      this.statesInfo = statesInfo;
      if (this.statesInfo != null) {
        for (let i = 0; i < this.statesInfo.length; i++) {
          this.statesNames.push(this.statesInfo[i].state);
          this.positivecases.push(this.statesInfo[i].positive);
        }
        this.RenderChart(this.statesNames, this.positivecases);
      }
    });
  }

  RenderChart(statesNames: any, positiveCases: any) {
    const barChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: statesNames,
        datasets: [
          {
            label:
              'Positive cases of COVID-19 in the United States until 2021-03-07',
            data: positiveCases,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

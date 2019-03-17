import { Component, OnInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Chart } from 'chart.js';
import { animate, AnimationOptions } from '@angular/animations';
import { UwService } from '../services/uw.service';



@Component({
  selector: 'app-uw',
  templateUrl: './uw.component.html',
  styleUrls: ['./uw.component.css']
})
export class UwComponent implements OnInit {

  appScoreChart = [];
  busCreditChart =[];
  consumerCreditChart =[];
  uwObject = {};
  uwReqObject = {
    "Provenir":
    {
      "Request":
      {
        "ID": "138867",
        "UserID": "43932172"
      }
    }
  };
  

  constructor(private uwService: UwService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getUWdata();

  }

  getUWdata() {
    this.uwService.getUWdata(this.uwReqObject)
      .subscribe((data) => {
        this.uwObject = data;
        console.log(this.uwObject);
        this.renderAppScoreChart();
        this.renderBussCreditScoreChart();
        this.renderConsCreditScoreChart();
      });
  }
  renderAppScoreChart() {
    var ctx = document.getElementById("appscorechart");
    let data = {
      datasets: [{
        data: [45, 55],
        backgroundColor: [
          'rgba(229, 0, 0)',
          'rgba(214, 212, 209)'
        ]
      }],
      labels: [
        // 'Red'
        ]
    };
    this.appScoreChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutoutPercentage: 80,
        circumference: Math.PI,
        rotation: -Math.PI
      }
    });
  }
  renderBussCreditScoreChart() {
    var ctx = document.getElementById("buscreditcorechart");
    let data = {
      datasets: [{
        data: [45, 55],
        backgroundColor: [
          'rgba(229, 0, 0)',
          'rgba(214, 212, 209)'
        ]
      }],
      labels: [
        // 'Red'
  
      ]
    };
    this.busCreditChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutoutPercentage: 80,
        circumference: Math.PI,
        rotation: -Math.PI
      }
    });
  }
  renderConsCreditScoreChart() {
    var ctx = document.getElementById("conscreditcorechart");
    let data = {
      datasets: [{
        data: [45, 55],
        backgroundColor: [
          'rgba(229, 0, 0)',
          'rgba(214, 212, 209)'
        ]
      }],
      labels: [
        // 'Red'
  
      ]
    };
    this.consumerCreditChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutoutPercentage: 80,
        circumference: Math.PI,
        rotation: -Math.PI
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {animate, AnimationOptions} from '@angular/animations';
import { UwService } from '../services/uw.service';



@Component({
  selector: 'app-uw',
  templateUrl: './uw.component.html',
  styleUrls: ['./uw.component.css']
})
export class UwComponent implements OnInit {

  myDoughnutChart=[];
  uwObject={};
  uwReqObject={  
    "Provenir":  
    {  
        "Request":  
        {  
            "ID": "138867",  
            "UserID": "43932172"  
        }  
    }  
};

  


   
data = {
  datasets: [{
      data: [45, 55],
      backgroundColor: [
        'rgba(229, 0, 0)',
        'rgba(214, 212, 209)'
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      // 'Red',
      // 'Yellow',
      // 'Blue'
  ]
};

  constructor(private uwService: UwService) { }

  ngOnInit() {
    this.getUWdata();
    this.myDoughnutChart = new Chart('canvas', {
      type: 'doughnut',
      data: this.data,
      options: {cutoutPercentage:80,
        circumference:Math.PI,
        rotation : -Math.PI
        }
      
  });
  }
  getUWdata(){
    this.uwService.getUWdata(this.uwReqObject)
    .subscribe((data) =>  {
      this.uwObject=data;
      console.log(this.uwObject);
    });
  }

}

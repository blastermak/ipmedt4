import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js'

//npm install chart.js --save

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let myChart = document.getElementById('myChart').getContext('2d');
    let massPopChart = new Chart(myChart,{
    type:'bar',
    data:{
      labels:['Hoofdpijn','SpierPijn','Lorem','Lorem','Lorem'],
      datasets:[{
        label:'Symptomen',
        data:[Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,Math.floor(Math.random() * 1000) + 10,175,0],// zorgt voor errors maar zorgt dat 0 de kleinste waarde is
        backgroundColor:['rgba(255,99,132,0.6)','rgba(0,99,132,0.6)','rgba(255,0,132,0.6)','rgba(255,99,0,0.6)','rgba(255,255,132,0.6)'],
        borderWidth:1,
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:'Aantal Klachten per symptoom',
      },
      legend:{
        display:false
      }

    }
});
  }

}

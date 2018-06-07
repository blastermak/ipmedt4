import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';


<<<<<<< HEAD


//npm install chart.js --save
=======
// npm install chart.js --save
>>>>>>> feature-5

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  constructor() { }

  ngOnInit() {

<<<<<<< HEAD
    $(document).ready(function () {

      var Klachten = ["Pijnlijke keel", "Haaruitval", "Pijn of jeuk in oren","Huiduitslag op andere plaatsen","Onverklaarbare koude rillingen"];
      var aantalKlachten = [24.2,20.8,14.9,13.7,12.4];

      var Highcharts = require('highcharts');

      var graph = "False";


      // Load module after Highcharts is loaded
      require('highcharts/modules/exporting')(Highcharts);

      // Create the chart
      Highcharts.chart('container', {

    // Bar Graph
      chart: {
          type: 'column'
      },
      title: {
          text: 'Klachten chart '
      },

      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Aantal Klachten'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Aantal klachten: <b>{point.y:.1f}</b>'},
      series: [{
          name: 'Population',
          data: [
              [Klachten[0], aantalKlachten[0]],
              [Klachten[1], aantalKlachten[1]],
              [Klachten[2], aantalKlachten[2]],
              [Klachten[3], aantalKlachten[3]],
              [Klachten[4], aantalKlachten[4]],


          ],
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]}


=======
//     $(document).ready(function () {
//
//       const Highcharts = require('highcharts');
//
//       // Load module after Highcharts is loaded
//       require('highcharts/modules/exporting')(Highcharts);
//
//       // Create the chart
//       Highcharts.chart('container', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Klachten chart '
//     },
//
//     xAxis: {
//         type: 'category',
//         labels: {
//             rotation: -45,
//             style: {
//                 fontSize: '13px',
//                 fontFamily: 'Verdana, sans-serif'
//             }
//         }
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Aantal Klachten'
//         }
//     },
//     legend: {
//         enabled: false
//     },
//     tooltip: {
//         pointFormat: 'Aantal klachten: <b>{point.y:.1f}</b>'},
//     series: [{
//         name: 'Population',
//         data: [
//             ['aliquet', 24.2],
//             ['scelerisque', 20.8],
//             ['consequat', 14.9],
//             ['Vestibulum', 13.7],
//             [' rhoncus', 13.1],
//             ['ullamcorper', 12.7],
//             ['Quisque ', 12.4],
//
//         ],
//         dataLabels: {
//             enabled: true,
//             rotation: -90,
//             color: '#FFFFFF',
//             align: 'right',
//             format: '{point.y:.1f}', // one decimal
//             y: 10, // 10 pixels down from the top
//             style: {
//                 fontSize: '13px',
//                 fontFamily: 'Verdana, sans-serif'
//             }
//         }
//     }]
// });
//
//
//       /*const myChart = <HTMLCanvasElement> document.getElementById('myChart');
// 			const ctx = myChart.getContext('2d');
//       const massPopChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: ['Hoofdpijn', 'SpierPijn', 'Lorem', 'Lorem', 'Lorem'],
//           datasets: [{
//             label: 'Symptomen',
//             data: [Math.floor(Math.random() * 1000) + 10, Math.floor(Math.random() * 1000) + 10, Math.floor(Math.random() * 1000) + 10, Math.floor(Math.random() * 1000) + 10, 175, 0],// zorgt voor errors maar zorgt dat 0 de kleinste waarde is
//             backgroundColor: ['rgba(255,99,132,0.6)', 'rgba(0,99,132,0.6)', 'rgba(255,0,132,0.6)', 'rgba(255,99,0,0.6)', 'rgba(255,255,132,0.6)'],
//             borderWidth: 1,
//             hoverBorderWidth: 3,
//             hoverBorderColor: '#000'
//           }]
//         },
//         options: {
//           title: {
//             display: true,
//             text: 'Aantal Klachten per symptoom',
//           },
//           legend: {
//             display: false
//           }
//
//         }
//       });*/
//     });
  }
>>>>>>> feature-5

      });
    }
}

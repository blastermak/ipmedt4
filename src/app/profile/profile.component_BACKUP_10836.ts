import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';

declare var require: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {


        $(document).ready(function () {
          var values;
          var splitValues;
          var Symptomen = ["Hoofdpijn","Spierpijn","Depressieve gevoelens","Tintelingen","Slapeloosheid","Grieperig","Haaruitval","Vermoeid","Buikpijn","Duizeligheid","Klierzwelling (hals, oksels, liezen)","Hartkloppingen, overslaan van het hart"];
          var SymptomenValues = [0,0,0,0,0,0,0,0,0,0,0,0];

<<<<<<< HEAD
          if (localStorage.getItem("sym") !== null) {
=======

          ($('[id^="dag"]').on('click', function () {
            console.log($('[id^="dag"]'));

            $('.active').attr('class', 'tab');

            $('[id^="dag"]').attr('class').replace(' active', '');
          }));

          if (typeof(Storage) !== "undefined") {
            //SymptomenValues = JSON.parse(localStorage.getItem("symvalues"));
>>>>>>> kalenderpicker
            values = localStorage.getItem("sym");
            splitValues = values.split(/(?=[A-Z])/)
            console.log(values)

          }
          else {
            console.log('no info');
          }

          for (var i = 0; i < Symptomen.length; i++){
            for (var j = 0; j < splitValues.length; j++){
              if (Symptomen[i] == splitValues[j]){
                SymptomenValues[i] += 1
              }
            }

          }

          console.log(SymptomenValues);
          var symp = JSON.stringify(SymptomenValues);

          localStorage.setItem('symValues', symp)
          /*for (var j = 0; j < SymptomenValues.length; j++){
            console.log(SymptomenValues[j])
          }*/


          var Klachten = ["Pijnlijke keel", "Haaruitval", "Pijn of jeuk in oren","Huiduitslag op andere plaatsen","Onverklaarbare koude rillingen"];
          var aantalKlachten = [24.2,20.8,14.9,13.7,12.4];

          var Highcharts = require('highcharts');

          var graph = "False";


          // Load module after Highcharts is loaded
          require('highcharts/modules/exporting')(Highcharts);


// Bar Graph
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
              "colorByPoint": true,
              data: [
                  [Symptomen[0], SymptomenValues[0]],
                  [Symptomen[1], SymptomenValues[1]],
                  [Symptomen[2], SymptomenValues[2]],
                  [Symptomen[3], SymptomenValues[3]],
                  [Symptomen[4], SymptomenValues[4]],
                  [Symptomen[5], SymptomenValues[5]],
                  [Symptomen[6], SymptomenValues[6]],
                  [Symptomen[7], SymptomenValues[7]],
                  [Symptomen[8], SymptomenValues[8]],
                  [Symptomen[9], SymptomenValues[9]],
                  [Symptomen[10], SymptomenValues[10]],
                  [Symptomen[11], SymptomenValues[11]],



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
            }]
          });
// end bar graph

// 2nd graph
// Create the chart
Highcharts.chart('graph2', {
chart: {
       type: 'spline'
   },
   title: {
       text: 'Aantal klachten in het loop van tijd'
   },

   xAxis: {
       type: 'datetime',
       dateTimeLabelFormats: { // don't display the dummy year
           month: '%e. %b',
           year: '%b'
       },
       title: {
           text: 'Date'
       }
   },
   yAxis: {
       title: {
           text: 'Aantal klachten'
       },
       min: 0
   },
   tooltip: {
       headerFormat: '<b>{series.name}</b><br>',
       pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
   },

   plotOptions: {
       spline: {
           marker: {
               enabled: true
           }
       }
   },

   colors: ['#26c460', '#258423', '#26c423', '#26c423', '#26c423'],

   // Define the data points. All series have a dummy year
   // of 1970/71 in order to be compared on the same x axis. Note
   // that in JavaScript, months start at 0 for January, 1 for February etc.
   series: [{
       name: "Hoofdpijn",
       data: [
           [Date.UTC(1970, 10, 25), 0],
           [Date.UTC(1970, 11,  6), 0.25],
           [Date.UTC(1970, 11, 20), 1.41],
           [Date.UTC(1970, 11, 25), 1.64],
           [Date.UTC(1971, 0,  4), 1.6],
           [Date.UTC(1971, 0, 17), 2.55],
           [Date.UTC(1971, 0, 24), 2.62],
           [Date.UTC(1971, 1,  4), 2.5],
           [Date.UTC(1971, 1, 14), 2.42],
           [Date.UTC(1971, 2,  6), 2.74],
           [Date.UTC(1971, 2, 14), 2.62],
           [Date.UTC(1971, 2, 24), 2.6],
           [Date.UTC(1971, 3,  1), 2.81],
           [Date.UTC(1971, 3, 11), 2.63],
           [Date.UTC(1971, 3, 27), 2.77],
           [Date.UTC(1971, 4,  4), 2.68],
           [Date.UTC(1971, 4,  9), 2.56],
           [Date.UTC(1971, 4, 14), 2.39],
           [Date.UTC(1971, 4, 19), 2.3],
           [Date.UTC(1971, 5,  4), 2],
           [Date.UTC(1971, 5,  9), 1.85],
           [Date.UTC(1971, 5, 14), 1.49],
           [Date.UTC(1971, 5, 19), 1.27],
           [Date.UTC(1971, 5, 24), 0.99],
           [Date.UTC(1971, 5, 29), 0.67],
           [Date.UTC(1971, 6,  3), 0.18],
           [Date.UTC(1971, 6,  4), 0]
       ]
   }, {
       name: "Spierpijn",
       data: [
           [Date.UTC(1970, 10,  9), 0],
           [Date.UTC(1970, 10, 15), 0.23],
           [Date.UTC(1970, 10, 20), 0.25],
           [Date.UTC(1970, 10, 25), 0.23],
           [Date.UTC(1970, 10, 30), 0.39],
           [Date.UTC(1970, 11,  5), 0.41],
           [Date.UTC(1970, 11, 10), 0.59],
           [Date.UTC(1970, 11, 15), 0.73],
           [Date.UTC(1970, 11, 20), 0.41],
           [Date.UTC(1970, 11, 25), 1.07],
           [Date.UTC(1970, 11, 30), 0.88],
           [Date.UTC(1971, 0,  5), 0.85],
           [Date.UTC(1971, 0, 11), 0.89],
           [Date.UTC(1971, 0, 17), 1.04],
           [Date.UTC(1971, 0, 20), 1.02],
           [Date.UTC(1971, 0, 25), 1.03],
           [Date.UTC(1971, 0, 30), 1.39],
           [Date.UTC(1971, 1,  5), 1.77],
           [Date.UTC(1971, 1, 26), 2.12],
           [Date.UTC(1971, 3, 19), 2.1],
           [Date.UTC(1971, 4,  9), 1.7],
           [Date.UTC(1971, 4, 29), 0.85],
           [Date.UTC(1971, 5,  7), 0]
       ]
   }, {
       name: "Depressieve gevoelens",
       data: [
           [Date.UTC(1970, 9, 15), 0],
           [Date.UTC(1970, 9, 31), 0.09],
           [Date.UTC(1970, 10,  7), 0.17],
           [Date.UTC(1970, 10, 10), 0.1],
           [Date.UTC(1970, 11, 10), 0.1],
           [Date.UTC(1970, 11, 13), 0.1],
           [Date.UTC(1970, 11, 16), 0.11],
           [Date.UTC(1970, 11, 19), 0.11],
           [Date.UTC(1970, 11, 22), 0.08],
           [Date.UTC(1970, 11, 25), 0.23],
           [Date.UTC(1970, 11, 28), 0.37],
           [Date.UTC(1971, 0, 16), 0.68],
           [Date.UTC(1971, 0, 19), 0.55],
           [Date.UTC(1971, 0, 22), 0.4],
           [Date.UTC(1971, 0, 25), 0.4],
           [Date.UTC(1971, 0, 28), 0.37],
           [Date.UTC(1971, 0, 31), 0.43],
           [Date.UTC(1971, 1,  4), 0.42],
           [Date.UTC(1971, 1,  7), 0.39],
           [Date.UTC(1971, 1, 10), 0.39],
           [Date.UTC(1971, 1, 13), 0.39],
           [Date.UTC(1971, 1, 16), 0.39],
           [Date.UTC(1971, 1, 19), 0.35],
           [Date.UTC(1971, 1, 22), 0.45],
           [Date.UTC(1971, 1, 25), 0.62],
           [Date.UTC(1971, 1, 28), 0.68],
           [Date.UTC(1971, 2,  4), 0.68],
           [Date.UTC(1971, 2,  7), 0.65],
           [Date.UTC(1971, 2, 10), 0.65],
           [Date.UTC(1971, 2, 13), 0.75],
           [Date.UTC(1971, 2, 16), 0.86],
           [Date.UTC(1971, 2, 19), 1.14],
           [Date.UTC(1971, 2, 22), 1.2],
           [Date.UTC(1971, 2, 25), 1.27],
           [Date.UTC(1971, 2, 27), 1.12],
           [Date.UTC(1971, 2, 30), 0.98],
           [Date.UTC(1971, 3,  3), 0.85],
           [Date.UTC(1971, 3,  6), 1.04],
           [Date.UTC(1971, 3,  9), 0.92],
           [Date.UTC(1971, 3, 12), 0.96],
           [Date.UTC(1971, 3, 15), 0.94],
           [Date.UTC(1971, 3, 18), 0.99],
           [Date.UTC(1971, 3, 21), 0.96],
           [Date.UTC(1971, 3, 24), 1.15],
           [Date.UTC(1971, 3, 27), 1.18],
           [Date.UTC(1971, 3, 30), 1.12],
           [Date.UTC(1971, 4,  3), 1.06],
           [Date.UTC(1971, 4,  6), 0.96],
           [Date.UTC(1971, 4,  9), 0.87],
           [Date.UTC(1971, 4, 12), 0.88],
           [Date.UTC(1971, 4, 15), 0.79],
           [Date.UTC(1971, 4, 18), 0.54],
           [Date.UTC(1971, 4, 21), 0.34],
           [Date.UTC(1971, 4, 25), 0]
           ]
       }]

    });
// End 2nd graph

        });
    }
  }

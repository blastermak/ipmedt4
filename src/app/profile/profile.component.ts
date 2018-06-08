import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';

declare var require: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {


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
            }]
          })
        });
    }
  }

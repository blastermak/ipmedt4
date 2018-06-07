import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import *  as datep from 'bootstrap-datepicker';


@Component({
  selector: 'app-dagboek',
  templateUrl: './dagboek.component.html',
  styleUrls: ['./dagboek.component.css']
})
export class DagboekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      const date_input = $('input[name="date"]'); // our date input has the name "date"
      date_input.datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true,
      });
    });


  }

}

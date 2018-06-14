import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-dagboek',
  templateUrl: './dagboek.component.html',
  styleUrls: ['./dagboek.component.css']
})
export class DagboekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(function () {

      const symAr = [];



      $('[id^="sym"]').on('click', function () {
          if ($('[id^="sym"]:checked').length > 0 ) {
            console.log($(this).parent().text().trim());
            const temp = $(this).parent().text().trim();
            symAr.push(temp);
            console.log(symAr);
          }
          if ( $('[id^="sym"]:checked').length = -1 ) {
            const temp = $(this).parent().text().trim();
            const index = symAr.indexOf(temp);
            if (index > -1) {
              symAr.splice(index, 1);
            }
            console.log(symAr);
          }
      });
      $('#submit').on('click', function () {
      });
    });


  }

}

import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dagboek',
  templateUrl: './dagboek.component.html',
  styleUrls: ['./dagboek.component.css']
})
export class DagboekComponent implements OnInit {

  constructor() { }

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  ngOnInit() {
  }

}

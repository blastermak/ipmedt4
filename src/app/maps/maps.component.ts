import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, polygon, overlays, layers } from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	mapOptions = {
		layers: [

			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 13,
		//Coordinates are for Leiden
		center: latLng(52.1601144, 4.497009700000035),

	}
	tekenCircels = [
			//Cronesteyn
			polygon([[52.14062836566003, 4.488254969775426], [52.141057061922496, 4.489520972430455],
			 				[52.14034593057216, 4.490422194659459], [52.14204248616223, 4.495786612689244],
							[52.14295476041191, 4.495336001574742], [52.14437692844845, 4.499713366687047],
							[52.14213831009301, 4.5065369064209335], [52.13676516690986, 4.50188059157108],
							[52.1377265857295, 4.501000827014195], [52.13547446244209, 4.492203181445348]])

	]
  constructor() { }

  ngOnInit() {
  }

}

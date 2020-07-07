import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-carusalcomponent',
  templateUrl: './carusalcomponent.component.html',
  styleUrls: ['./carusalcomponent.component.css']
})

export class CarusalcomponentComponent implements OnInit {
  nomobile: boolean;

  constructor() {
    if (window.screen.width >= 1060) { // 768px portrait
      this.nomobile = true;
    }
   }

  cars = new BehaviorSubject<any[]>([]);
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input() show: boolean;
  ngOnInit(): void {
    setTimeout(() => {
      this.cars.next([
        {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
        {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
        {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
        {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
        {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
        {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
        {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
        {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
        {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
      ]);
    }, 1000);
  }

}

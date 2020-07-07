import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-the-marketsidebar',
  templateUrl: './the-marketsidebar.component.html',
  styleUrls: ['./the-marketsidebar.component.css']
})
export class TheMarketsidebarComponent implements OnInit {
  Size: any;
  Type :string ="Type";
  val :number=4;
  val2: number=1;
  val3: number=3;
  rangeValues:  number[]=[1,200];
  rangVal: any;
  rangValTo: any;

  priceshow: boolean=true;
  Discountshow: boolean=true;
  Sizeshow :boolean =true;
  myform: FormGroup ;
  constructor(private fb : FormBuilder) {

  }
  ngOnInit(): void {
    this.myform=this.fb.group( {
      age: ['']
    })
  }
  handleChange($event: any) {
    debugger
    this.rangVal=$event.values[0]
  }

  getItem() {

  }
}

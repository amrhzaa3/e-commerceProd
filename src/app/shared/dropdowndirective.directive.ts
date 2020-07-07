import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective {
@HostBinding('class.dropdown-toggle') toggle:boolean=false;

  constructor() {

  }
   @HostListener('click') open(evrny:Event){
    this.toggle=!this.toggle;
   }
}

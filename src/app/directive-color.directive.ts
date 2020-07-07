import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectiveColor]'
})
export class DirectiveColorDirective implements OnInit{

  constructor( private elemref:ElementRef, private Render :Renderer2) { }
  ngOnInit() {
   // this.Render.setStyle(this.elemref.nativeElement,'color','blue')
  }
  @HostBinding('style.backgroundColor') backgroundcolor :string ='transparent';
  @HostListener('mouseover') moouseevent( even :Event){
    // this.Render.setStyle(this.elemref.nativeElement,'background-color','blue')
    this.backgroundcolor='red';
  };
  @HostListener('mouseleave') moouseleave( even :Event){
    // this.Render.setStyle(this.elemref.nativeElement,'background-color','transparent')
    this.backgroundcolor='transparent';
  };

  @HostListener('click',['$event.target']) moouseeclik( even :Event){
    // this.Render.setStyle(this.elemref.nativeElement,'background-color','red')
    this.backgroundcolor='pink';
  };
  @HostListener('blur',['$event.target']) moouseclik( even :Event){
    // this.Render.setStyle(this.elemref.nativeElement,'background-color','pink')
  };

}



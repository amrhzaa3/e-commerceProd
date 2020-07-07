import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {MegaMenuItem, MenuItem} from "primeng";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';
import {NgForm} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {CarService2Service} from "../../shared/car-service2.service";
import {ProductDetails} from "../../ProductDtos/productDetails";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  // signUpForm :FormGroup;
  submitted: boolean=false;
  DisplaySidBar: boolean=false;
  cssclass:string ="paragraph";
  loginFlage :boolean =false;
  customvalidationNams=['amr','mohamed','ali'];
  modalRef: BsModalRef;
  cartItems: ProductDetails[];
  login: boolean =true;
  items: MegaMenuItem[];
  val: number;
  items2: MegaMenuItem[];
  display: boolean=false;
  menuval: any;
  menu=['item','item2'];
  subscription = new Subscription();
  singIn:MenuItem[];
  myform: FormControl;
  ModalTemplate :TemplateRef<any>;

  signUpForm = this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,this.forbidenNames.bind(this)]],
    zip:['',[Validators.required]],
    address:['',[Validators.required]],
  },);

  constructor( private route :Router,private modalService: BsModalService, private fb :FormBuilder,private cartSerive :CarService2Service) { }

  menueNavigation(){
    if(this.menuval=='Video 1.1'){
      console.log('i am in menue value');
    }
  }

  ngOnInit(): void {
    this.singIn = [{
      label: 'Sign In',command:(event => {
        // this.route.navigate(['/signIn']);

        this.openModal(this.ModalTemplate);
      }),
      items: [
        {label: 'New', icon: 'pi pi-plus'},
        {label: 'Open', icon: 'pi pi-download'}
      ]
    },
      {
        label: 'Sign Up',command:(event => {
          this.route.navigate(['/signUp']);
        }),
        items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
        ]
      }];
    this.items2=[{
      label:'Sign in',icon:'pi pi-user',
      items:[
        [
          {
            label: 'create acount',icon :'pi pi-user',
            items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
          }]
      ]
    }];
    this.items = [
      {
        label: 'Men', icon: 'pi pi-fw pi-user',
        items: [
          [
            {
              label: 'Clothes',
              command:(event =>
                this.route.navigate(['clothes-collection'])
              ),
              items: [{label: 'T-Shirt',command:(event) => {
                  this.route.navigate(['men/T-shirt']);
                }},
                {label: 'Jeans&Pants',command:(event) => {
                   this.route.navigate(['men/jeans&pants']);
                }},
                {label: 'SwimWare',command:(event) => {
                  this.route.navigate(['men/swimware']);
                }},
                {label: 'Polos',command:(event) => {
                    this.route.navigate(['men/polos']);
                  }},
                {label: 'Shoes',command:(event) => {
                    this.route.navigate(['men/T-shirt']);
                  }},
                {label: 'Shirts',command:(event) => {
                    this.route.navigate(['men/shirt']);
                  }}
                ]
            },
            {
              label: 'Watches',icon: 'assets/clothesfolder/1.jpeg',
              items: [
                {label: 'Casual Watches'} ,
                {label: 'Sport Watches'} ,
                {label: 'Stainless Steel Watches'},
                {label: 'Shop All'} ,
              ]
            }
          ],
          [
            {
              label: 'Footwear',
              items: [
                {label: 'Shose'},
                {label: 'Slippers'},
                {label: 'Formal'},
                {label: 'Boots'},
                {label: ' Sneakers'}
                ]
            },
            {
              label: 'Bags',
              items: [
                {label: 'Backpacks'},
                {label: 'Wallets'},
                {label: 'Messenger bags'}
                ]
            }
          ]
        ]
      },
      {
        label: 'Girls', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
            },
            {
              label: 'User 4',
              items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
            },
            {
              label: 'User 6',
              items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'NEW Arrival', icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: 'Event 1',
              items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
            },
            {
              label: 'Event 2',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
            },
            {
              label: 'Event 4',
              items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Kids', icon: 'fa fa-female',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Setting 2',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Setting 3',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      }
    ];
this.subscription=this.obs$.subscribe(
  d=>{ console.log(d)} ,
    error => {console.log(error)},
  ()=>{console.log('complete')}
  ) ;

  }
   obs$ :Observable<any>= new Observable(Observer => {
    let val ;
    Observer.next('observer is called ');
    Observer.next(this.singIn);
setTimeout(ob=>{
  Observer.next('tim out');
}
,2000)
  });

  openModal(template: TemplateRef<any>) {
    this.DisplaySidBar=false;
    this.modalRef = this.modalService.show(template);
  }

  setTemplate(template: TemplateRef<any>) {
this.ModalTemplate=template;
  }
  get f(){ return this.signUpForm.controls; }

  setvalidation(myform: FormGroup) :any {
   return  this.submitted=true;
    // alert(myform.form.value.email);
    // alert("iam amany");
// if (myform.form.value.email=='amrhzaa3@gmail.com' && myform.form.value.password==123 ){
//  return 'btn btn-primary';
// }else {
//   return 'btn btn-danger';
//
// }

  }

  forbidenNames(controles: FormControl) :{ [p: string]: boolean }{
    if(this.customvalidationNams.indexOf(controles.value)){
      return {'forbiden is true':true};
    }

  }


  setcss(signUpForm: FormGroup) {
  // //   if (signUpForm.form.value.email=='amrhzaa3@gmail.com' && myform.form.value.password==123 ){
  // //     return 'btn btn-primary';
  // //     console.log('i am ');
  // //   }else {
  // //     return 'btn btn-danger';
  // //
  // //   }
  }

  openloginModal( logintemplate) {
    this.DisplaySidBar=false;
    this.ModalTemplate=logintemplate;
   // this.loginFlage=true;
   this.modalRef.hide();
   this.openModal(this.ModalTemplate);
  }

  setbackGround() {
    debugger
    this.cssclass="logincoler";
    alert("dddd");
  }
  navigateToCart() {
    debugger
    this.DisplaySidBar=false;
    this.route.navigate(['Cart']);
  }


  getCartItem() {
     if(this.login== false ){
    this.login=false;
     }
    this.cartSerive.getObservalItem().subscribe(res=>{
      this.cartItems=res;
    });
    //this.cartItems=this.cartSerive.getCartItem();
   this.DisplaySidBar=true;

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

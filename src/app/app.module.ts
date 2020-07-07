import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule, MegaMenuModule, MenuModule, PaginatorModule, RatingModule, SplitButtonModule} from "primeng";
import { ModalModule } from 'ngx-bootstrap/modal';
import {AccordionModule} from 'primeng/accordion';
import {SliderModule} from 'primeng/slider';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterationComponent } from './registeration/registeration.component';
import { CarusalcomponentComponent } from './carusalcomponent/carusalcomponent.component';
import { MenComponent } from './men/men.component';
import { ForGirlComponent } from './for-girl/for-girl.component';
import {MatMenuModule} from "@angular/material/menu";
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import {PaginationConfig, PaginationModule} from "ngx-bootstrap/pagination";
import {SidebarModule} from 'primeng/sidebar';
import { DirectiveColorDirective } from './directive-color.directive';
import { DropdowndirectiveDirective } from './shared/dropdowndirective.directive';
import {CardModule} from 'primeng/card';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsViewComponent } from './product-details-view/product-details-view.component';
import {CartComponent} from './cart/cart.component';
import {CarService2Service} from './shared/car-service2.service';
import {MenModule} from "./men/men.module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterationComponent,
    CarusalcomponentComponent,
    MenComponent,
    ForGirlComponent,
    FooterComponent,
    DropdowndirectiveDirective,
    HeaderComponent,
    DirectiveColorDirective,
    DropdowndirectiveDirective,
    ProductDetailsComponent,
    ProductDetailsViewComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MegaMenuModule,
        SliderModule,
        FormsModule,
        NgbModule,
        MenubarModule,
        DialogModule,
        BrowserAnimationsModule,
        MenuModule,
        CarouselModule,
        MatMenuModule,
        SplitButtonModule,
        PaginationModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
        SidebarModule,
        RatingModule,
        CardModule,
        MenModule

    ],
  providers: [PaginationConfig,CarService2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

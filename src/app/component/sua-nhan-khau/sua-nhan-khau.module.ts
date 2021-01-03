import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'

import { SuaNhanKhauComponent } from './sua-nhan-khau.component';
import { SuaNhanKhauRoutingModule } from './sua-nhan-khau-routing.module';

@NgModule({
  imports: [
    FormsModule,
    SuaNhanKhauRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ SuaNhanKhauComponent ]
})
export class SuaNhanKhauModule { }

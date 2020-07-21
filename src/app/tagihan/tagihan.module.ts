import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagihanPageRoutingModule } from './tagihan-routing.module';

import { TagihanPage } from './tagihan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagihanPageRoutingModule
  ],
  declarations: [TagihanPage]
})
export class TagihanPageModule {}

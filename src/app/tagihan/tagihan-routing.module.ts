import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagihanPage } from './tagihan.page';

const routes: Routes = [
  {
    path: '',
    component: TagihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagihanPageRoutingModule {}

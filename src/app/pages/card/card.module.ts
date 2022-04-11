import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CardComponent } from "./card.component";

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
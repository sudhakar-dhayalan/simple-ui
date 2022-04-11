import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SortDirective } from "../directive/sort.directive";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SortDirective],
  exports: [SortDirective],
})
export class SharedModule {}
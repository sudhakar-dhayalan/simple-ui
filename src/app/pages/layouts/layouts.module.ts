import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutsComponent } from "./layouts.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    pathMatch: 'full',
    redirectTo: 'card'
  },
  {
    path: 'signup-form',
    loadChildren: () => import('../form/signup-form.module').then(m => m.SignUpFormModule)
  },
  {
    path: 'card',
    loadChildren: () => import('../card/card.module').then(m => m.CardModule)
  },
  {
    path: 'table',
    loadChildren: () => import('../table/table.module').then(m => m.TableModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LayoutsComponent],
  exports: [LayoutsComponent],
})
export class LayoutsModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SignupFormComponent } from "./signup-form.component";

const routes: Routes = [
  {
    path: '',
    component: SignupFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [SignupFormComponent],
  exports: [SignupFormComponent],
})
export class SignUpFormModule {}
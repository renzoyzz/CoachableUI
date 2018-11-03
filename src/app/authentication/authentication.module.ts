import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FezModule } from "../fez/fez.module";
import { LoginComponent } from "./login/login.component";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatCardModule,
  MatTabsModule
} from "@angular/material";
import { CustomFormsModule } from "ng2-validation";

@NgModule({
  imports: [
    CommonModule,
    FezModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    FezModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthenticationModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FezErrorsComponent } from "./errors/errors.component";
import { FezErrorComponent } from "./error/error.component";
import { FezErrorModule } from "./error/error.module";
import { FezErrorsModule } from "./errors/errors.module";

@NgModule({
  imports: [CommonModule, FezErrorsModule, FezErrorModule],
  declarations: [],
  exports: [FezErrorsModule, FezErrorModule]
})
export class FezValidationModule {}

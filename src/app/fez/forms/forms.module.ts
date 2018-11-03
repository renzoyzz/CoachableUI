import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsComponent } from "./forms.component";
import { FezControlsModule } from "./controls/controls.module";
import { FezValidationModule } from "./validation/validation.module";

@NgModule({
  imports: [CommonModule, FezControlsModule, FezValidationModule],
  declarations: [FormsComponent],
  exports: [FormsComponent, FezControlsModule, FezValidationModule]
})
export class FezFormsModule {}

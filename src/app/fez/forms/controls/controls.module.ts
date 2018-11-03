import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FezInputModule } from "./input/input.module";

@NgModule({
  imports: [CommonModule, FezInputModule],
  exports: [FezInputModule]
})
export class FezControlsModule {}

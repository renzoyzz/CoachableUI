import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FezInputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FezInputComponent],
  exports: [FezInputComponent, FormsModule]
})
export class FezInputModule {}

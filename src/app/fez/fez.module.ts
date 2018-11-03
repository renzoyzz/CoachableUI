import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FezButtonComponent } from './button/button.component';
import { NgIfFormDirective } from './ng-if-form.directive';
import { FezFormsModule } from './forms/forms.module';
import { FezComponent } from './fez.component';

@NgModule({
  imports: [CommonModule, FezFormsModule],
  declarations: [FezComponent, FezButtonComponent, NgIfFormDirective],
  exports: [FezFormsModule, FezButtonComponent, NgIfFormDirective]
})
export class FezModule {}

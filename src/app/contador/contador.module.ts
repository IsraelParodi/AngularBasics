import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  // Componentes que va a tener
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
  imports: [CommonModule],
})
export class ContadorModule {}

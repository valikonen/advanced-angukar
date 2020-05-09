import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/InputRefDirective';

@NgModule({
    declarations: [
        AuFaInputComponent,
        InputRefDirective
    ],
    imports: [ CommonModule ],
    exports: [
        AuFaInputComponent,
        InputRefDirective
    ],
    providers: [],
})
export class AuInputModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
    declarations: [
        HighlightDirective,
        TitleCasePipe
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        HighlightDirective,
        TitleCasePipe,
    ]
})
export class SharedModule { }

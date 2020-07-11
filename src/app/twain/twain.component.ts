import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';

import { TwainService } from './twain.service';

@Component({
  selector: 'twain-quote',
  templateUrl: './twain.component.html'
})
export class TwainComponent implements OnInit {
  errorMessage: string;
  quote: Observable<string>;

    constructor(private twainService: TwainService) { }

    ngOnInit(): void {
        this.getQuote();
    }

    getQuote() {
        this.errorMessage = '';
        this.quote = this.twainService.getQuote().pipe(
            startWith('...'),
            catchError(
                (err: any) => {
                    setTimeout(() => this.errorMessage = err.message || err.toString());
                    return of('...');
                }
            )
        );
    }
}

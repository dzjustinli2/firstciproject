import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, Observer, of, throwError } from 'rxjs';
import { concat, map, retryWhen, switchMap, take } from 'rxjs/operators';

import { Quote } from './quote';

@Injectable()
export class TwainService {
    constructor(private http: HttpClient) { }

    private nextId = 1;

    getQuote(): Observable<string> {
        return Observable.create(
            (observer: Observer<number>) => {
                observer.next(this.nextId++)
            }
        )
            .pipe(
                switchMap(
                    (id: number) => this.http.get<Quote>(`api/quotes/${id}`)
                ),
                map((q: Quote) => q.quote),
                retryWhen(
                    errors => {
                        return errors.pipe(
                            switchMap((error: HttpErrorResponse) => {
                                if (error.status === 404) {
                                    this.nextId = 1;
                                    return of(null);
                                }
                                console.error(error);
                                return throwError('can not get twain quote from server');
                            }),
                            take(2),
                            concat(throwError('There are no twain quote'))
                        );
                    }
                )
            );
    }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {map, debounceTime, switchMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'j-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('searchInput')
  private searchInput: ElementRef;

  constructor() {
  }

  ngOnInit() {

    this.registerSearchEvent();
  }

  private registerSearchEvent() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(300))
      .pipe(map((e: Event) => {
        const target = e.target as HTMLInputElement;
        return target.value;
      }))
      .pipe(switchMap((val: string) => {
        return this.doSearch(val);
      }))
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  private doSearch(val: string): Observable<any> {
    return fromPromise(fetch('/test').then((value) => {
      return value;
    }));
  }
}

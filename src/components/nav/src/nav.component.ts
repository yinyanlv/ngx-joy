import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {map, debounceTime, switchMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'j-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  private searchSubscription: Subscription = Subscription.EMPTY;

  @ViewChild('searchInput')
  private searchInput: ElementRef;

  constructor() {
  }

  ngOnInit() {

    this.registerSearchEvent();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  private registerSearchEvent() {
    this.searchSubscription = fromEvent(this.searchInput.nativeElement, 'input')
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

  onClickParentNode() {
    console.log('clicked parent node');
  }

  onClickSubNav(e: MouseEvent) {
    e.stopPropagation();
    console.log(111);
  }

  onClickLeafNode() {
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mat-header';

  mediaSub: Subscription | null = null;

  deviceXS: boolean = false;

  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {

      this.deviceXS = change[0].mqAlias === 'xs' ? true : false;
      console.log(this.deviceXS);
      //console.log(change[0].mqAlias);
    });
  }
  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
  }
}

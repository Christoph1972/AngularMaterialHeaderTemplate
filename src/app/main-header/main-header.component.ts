import { OnInit, AfterViewInit, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements AfterViewInit, OnInit {

  //Get all buttons ny "navButton" atribute.
  @ViewChildren('navButton')
  listOfNavButtons!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {

      let result = this.containsButton(e) ? "match" : "missmatch";
      console.log(result);
    });
  }

  ngAfterViewInit(): void {
  }

  containsButton(e: Event): boolean {

    let contains = false;

    //The following console.log shows the difference between e.target & listOfNavButton items.
    //********************** 
    console.log(e.target);
    console.log("----------------");
    console.log(this.listOfNavButtons.first);
    //**********************

    //Using a normal button works as expected. With mat-button the comparison fails.
    this.listOfNavButtons.forEach(x => {

      if (e.target === x.nativeElement) {
        console.log("Match");
        contains = true;
        return;
      }
    });

    return contains;
  }


  private _deviceXS: boolean = false;
  @Input()
  public get deviceXS(): boolean {
    return this._deviceXS;
  }
  public set deviceXS(v: boolean) {
    this._deviceXS = v;

    this.menuVisible = v;
  }



  menuVisible: boolean = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}

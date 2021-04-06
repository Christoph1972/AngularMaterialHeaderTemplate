import { OnInit, AfterViewInit, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  menuVisible: boolean = false;

  //Get all buttons by "navButton" atribute.
  @ViewChildren('navButton', { read: ElementRef })
  listOfNavButtons!: QueryList<ElementRef>;

  @ViewChild('toggleButton', { read: ElementRef })
  toggleButtonRef!: ElementRef;

  private _deviceXS: boolean = false;
  @Input()
  public get deviceXS(): boolean {
    return this._deviceXS;
  }
  public set deviceXS(v: boolean) {
    this._deviceXS = v;   
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.handleMenuOnWindowClick();
  }


  handleMenuOnWindowClick(): void {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (this.isToggleButton(e))//If sender is ToggleButton do nothing here (Do the button click event and tgoggle)
        return;

      let isNavButton = this.isNavButton(e);

      if (!isNavButton) {
        this.menuVisible = false;//Close the Menu if sender it's not a NavButton  
      } else {
        //Is NavButton
        //do some action here.........
      }
    });
  }


  isToggleButton(e: Event): boolean {
    return e.target === this.toggleButtonRef?.nativeElement;
  }

  isNavButton(e: Event): boolean {

    let contains = false;

    this.listOfNavButtons.forEach(x => {

      if (e.target === x.nativeElement?.firstChild) {
        contains = true;
        return;
      }
    });

    return contains;
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }


}

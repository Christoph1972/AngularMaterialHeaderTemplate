import { Interpolation } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input()
  // deviceXS: boolean = false;



  private _deviceXS: boolean = false;
  @Input()
  public get deviceXS(): boolean {
    return this._deviceXS;
  }
  public set deviceXS(v: boolean) {
    this._deviceXS = v;
    if (!v)
      this.menuVisible = false;
  }



  menuVisible: boolean = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}

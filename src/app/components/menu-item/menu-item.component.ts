import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  public iconSrc: string;
  public activeIconSrc: string;
  public content: string;
  public path: string;
  
  @Input('iconSrc') 
  set IconSrc (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.iconSrc = value;
  }

  @Input('activeIconSrc') 
  set ActiveIconSrc (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.activeIconSrc = value;
  }

  @Input('content') 
  set Content (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.content = value;
  }

  @Input('path') 
  set Path (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.path = value;
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public goToPage(): void {
    this.router.navigate([`${this.path}`]);
  }

  public getNavigationImageSrc(isActive: boolean): string {
    return isActive && this.activeIconSrc
      ? this.activeIconSrc
      : this.iconSrc;
  }

}

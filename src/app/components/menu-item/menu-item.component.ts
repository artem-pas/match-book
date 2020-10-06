import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  public iconSrc: string;
  public text: string;
  
  @Input('iconSrc') 
  set IconSrc (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.iconSrc = value;
  }

  @Input('text') 
  set Text (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.text = value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

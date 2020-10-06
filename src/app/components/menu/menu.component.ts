import { Component, OnInit } from '@angular/core';

/* Interfaces, constants */
import { MenuItem } from 'src/app/shared/interfaces';
import { MenuItemList } from 'src/app/shared/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu: MenuItem[] = MenuItemList;

  constructor() { }

  ngOnInit(): void {
  }

}

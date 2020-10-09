import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  public imageSrc: string;
  public username: string;
  public userAvatarSrc: string;
  public name: string;
  public author: string;
  public price: number;
  public id: number;
  
  @Input('imageSrc') 
  set ImageSrc (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.imageSrc = value;
  }

  @Input('username') 
  set Username (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.username = value;
  }

  @Input('userAvatarSrc') 
  set UserAvatarSrc (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.userAvatarSrc = value;
  }

  @Input('name') 
  set Name (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.name = value;
  }

  @Input('author') 
  set Author (value: string) {
    if (!_.isString(value)) {
      return;
    }

    this.author = value;
  }

  @Input('price') 
  set Price (value: number) {
    if (!_.isNumber(value)) {
      return;
    }

    this.price = value;
  }

  @Input('id') 
  set Id (value: number) {
    if (!_.isNumber(value)) {
      return;
    }

    this.id = value;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToBook(): void {
    this.router.navigate([`/books/${this.id}`]);
  }

}

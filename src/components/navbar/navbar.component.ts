import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuActive = false;

  constructor() { }

  ngOnInit() {
  }

  onBurgerClicked() {
    this.menuActive = !this.menuActive;
  }
}

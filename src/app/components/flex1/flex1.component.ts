import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex1',
  templateUrl: './flex1.component.html',
  styleUrls: ['./flex1.component.css']
})
export class Flex1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    return false;
  }


  invisibleOnDesktop() {
    return true;
  }

}

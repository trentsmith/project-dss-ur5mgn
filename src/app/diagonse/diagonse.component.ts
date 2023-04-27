import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagonse',
  templateUrl: './diagonse.component.html',
  styleUrls: ['./diagonse.component.css'],
})
export class DiagonseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  arm = false;
  foot = false;
  hand = false;
  legs = false;
  head = false;
  torso = false;
  pics = true;
  SymptonArray = [];
  addSymptons(sym) {
    console.log(this.SymptonArray);
    if (this.SymptonArray.indexOf(sym) == -1) {
      this.SymptonArray.push(sym);
    }
  }
  switchpics() {
    this.pics = !this.pics;
  }
  chooseArm() {
    this.arm = !this.arm;
    this.switchpics();
  }
  chooseFoot() {
    this.foot = !this.foot;
    this.switchpics();
  }
  chooseHand() {
    this.hand = !this.hand;
    this.switchpics();
  }
  chooseLegs() {
    this.legs = !this.legs;
    this.switchpics();
  }
  chooseHead() {
    this.head = !this.head;
    this.switchpics();
  }
  chooseTorso() {
    this.torso = !this.torso;
    this.switchpics();
  }
}

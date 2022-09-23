import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private http: HttpClient) {}

  disease = [[], []];
  login = false;
  Adddisease = false;
  History = false;
  Diagonse = false;
  test = true;
  bodyparts = ['arm', 'foot', 'hand', 'legs', 'head', 'torso'];
  register = false;
  username: string;
  password: string;
  data1: any;
  registerfunct() {
    this.register = !this.register;
  }
  share() {
    window.alert('The product has been shared!');
  }
  loginfunct() {
    var i = 0;
    console.log(this.username);
    console.log(this.password);
    var url1 =
      'https://dss-sql-tables.trentsmith1.repl.co/select/user/0/password';
    /*var url1 =
      'https://dss-sql-tables.trentsmith1.repl.co/select/user/' +
      this.username +
      '/' +
      this.password;*/
    this.http.get(url1).subscribe((data: any[]) => {
      this.data1 = data;
    });

    if (this.data1 != undefined) {
      console.log(this.data1);
    }
    this.login = !this.login;
  }
  Historyfunct() {
    this.History = !this.History;
  }
  Diagonsefunct() {
    this.Diagonse = !this.Diagonse;
  }
  Adddiseasefunct() {
    this.Adddisease = !this.Adddisease;
  }
  addDisease(bodypart, sympton) {
    this.disease[0].push(bodypart);
    this.disease[1].push(sympton);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

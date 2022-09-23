import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  data: any[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //console.log('Test');
  }
  test() {
    var url = 'https://dss-sql-tables.trentsmith1.repl.co/';
    //var url = 'https://dss-sql-tables.trentsmith1.repl.co/';
    this.http.get(url).subscribe((data: any[]) => {
      this.data = data;
    });
    console.log(this.data);
  }
}

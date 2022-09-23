import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.css'],
})
export class AddDiseaseComponent implements OnInit {
  constructor(private http: HttpClient) {}
  sympton = '';
  disease = '';
  data: any[];
  ngOnInit() {}
  onSymptonKeyUp(event: any) {
    this.sympton = event.target.value;
  }
  onDiseaseKeyUp(event: any) {
    this.disease = event.target.value;
  }
  onSubmit() {
    var url =
      'https://dss-sql-tables.trentsmith1.repl.co/insert/symptons/test/test';
    this.http.get(url).subscribe((data: any[]) => {
      this.data = data;
    });
  }
}

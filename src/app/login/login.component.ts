import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() LoginButtonEvent = new EventEmitter<string>();
  @Input() test: any;
  constructor(private http: HttpClient) {}
  @Input() username: string;
  @Input() password: string;
  ngOnInit() {}

  LoginButtonEventfunc() {
    this.LoginButtonEvent.emit();
  }
  onUsernameKeyUp(event: any) {
    this.username = event.target.value;
  }
  onPasswordKeyUp(event: any) {
    this.password = event.target.value;
  }
}

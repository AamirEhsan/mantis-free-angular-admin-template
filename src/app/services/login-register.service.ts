import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Login } from '../models/login';
import { Controllers, environment } from '../environments/environment.prod';
import { left } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  rootUrl: string = environment.rootApiUrl;
  constructor(private http:HttpClient) { }
  logindetail:Login = new Login();
  login()
  {
    const res= this.http.post(this.rootUrl+Controllers.Auth+'login',this.logindetail,{responseType:'text'});
    return res;
  }
}

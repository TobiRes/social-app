import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Organization} from '../models/organization.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  API_URL = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  registerUser(credentials: User): Observable<User> {
    return this.http.post<User>(this.API_URL + "/user/login", credentials, httpOptions);
  }

  loginUser(credentials: User): Observable<User> {
    return this.http.post<User>(this.API_URL + "/user/register", credentials, httpOptions);
  }

  loginOrg(info: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.API_URL + "/org/login", info, httpOptions);
  }

  registerOrg(info: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.API_URL + "/org/register", info, httpOptions);
  }
}

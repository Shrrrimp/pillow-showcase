import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginUrl = environment.loginUrl;
  public token: String;

  constructor(private http: HttpClient, private router: Router) {

  }

  public logIn(name: string, password: string): Observable<String> {
    return this.http.post<String>(this.loginUrl, {}, { params: { name, password } })
      .pipe(map(data => {
        if (data) {
          localStorage.setItem('token', JSON.stringify(data));
          this.token = data;
        }
        return data;
      }));
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  public isAdmin() {
    return this.router.url.indexOf('/admin') !== -1;
  }
}

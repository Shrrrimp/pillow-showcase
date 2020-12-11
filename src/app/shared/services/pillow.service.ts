import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PillowService {

  public baseUrl = environment.apiUrl;
  public pillowsList: Pillow[];

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPillowsList(): Observable<Pillow[]> {
    return this.http.get<Pillow[]>(this.baseUrl);
  }

  getPillow(id: string): Observable<Pillow> {
    return this.http.get<Pillow>(`${this.baseUrl}/${id}`);
  }

  deletePillow(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'authorization': `Bearer ${this.authService.getToken()}` });
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: headers });
  }
}

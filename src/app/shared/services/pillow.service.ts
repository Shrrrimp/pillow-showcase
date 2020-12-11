import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pillow } from 'src/app/shared/models/pillow.model';

@Injectable({
  providedIn: 'root'
})
export class PillowService {

  public baseUrl = environment.apiUrl;
  public pillowsList: Pillow[];

  constructor(private http: HttpClient) { }

  getPillowsList(): Observable<Pillow[]> {
    return this.http.get<Pillow[]>(this.baseUrl);
  }

  getPillow(id: string): Observable<Pillow> {
    return this.http.get<Pillow>(`${this.baseUrl}/${id}`);
  }
}

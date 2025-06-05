import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NumberRequest {
  number: string;
}

@Injectable({ providedIn: 'root' })
export class GtinService {
  private readonly baseUrl = 'http://localhost:5068/api/gtin';

  constructor(private http: HttpClient) {}


  generate(count: number): Observable<string[]> {
  return this.http.post<string[]>(`${this.baseUrl}/generate`, count, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}


  calculateCheckDigit(number: string): Observable<string> {
      const numberRequest: NumberRequest = {
      number: JSON.stringify(number)
    };
  return this.http.post<string>(
    `${this.baseUrl}/checkdigit`, numberRequest,
    {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  );
 }
}

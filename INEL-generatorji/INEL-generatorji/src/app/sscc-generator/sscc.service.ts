import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SsccService {
  private readonly apiUrl = 'http://localhost:5068/api/sscc'; 

  constructor(private http: HttpClient) {}

  generateSSCC(companyPrefix: string, extensionDigit: string, count: number = 1): Observable<string[]> {
    const body = {
        gs1CompanyPrefix: companyPrefix,
        extensionDigit: extensionDigit,
        initialSerialNumber: 0,
        count: count
    };
     
    return this.http.post<string[]>(`${this.apiUrl}/generate`, body);
  }
}

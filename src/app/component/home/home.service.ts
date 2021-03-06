import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class HomeService {
    constructor(private http: HttpClient) {}
    
    GetAll(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        const httpOptions = {
          headers: headers
        }
        const url = 'https://localhost:44343/api/ThongKeYTe?pageNum=-1&pageSize=0';
        return this.http.get<any>(url, httpOptions).pipe();
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class ThongTinKhaiBaoService {
    constructor(private http: HttpClient) {}
    
    GetAll(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers
      }
      const url = 'https://localhost:44343/api/ToKhaiYTe?pageNum=-1&pageSize=1';
      return this.http.get<any>(url, httpOptions).pipe();
    }
    GetNhanKhauByID(id: any) {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers
      }
      const url = `https://localhost:44343/api/NhanKhau/${id}`;
      return this.http.get(url, httpOptions).pipe();
    } 
}

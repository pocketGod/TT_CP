import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {}

  get<TRes>(url: string): Observable<TRes> {
    return this.http.get<TRes>(this.getFullUrl(url));
  }

  post<TReq, TRes>(url: string, data: TReq): Observable<TRes> {
    return this.http.post<TRes>(this.getFullUrl(url), data);
  }

  put<TReq, TRes>(url: string, data: TReq): Observable<TRes> {
    return this.http.put<TRes>(this.getFullUrl(url), data);
  }

  delete<TRes>(url: string): Observable<TRes> {
    return this.http.delete<TRes>(this.getFullUrl(url));
  }

  private getFullUrl(url: string): string {
    return `${this.baseUrl}/api/${url}`;
  }
}

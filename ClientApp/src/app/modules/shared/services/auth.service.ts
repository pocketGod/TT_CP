import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { SiteLogin, siteLoginResponse } from 'src/app/models/Utils.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpHandlerService {

  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
    super(http,baseUrl);
  }

  siteLogin(sitePass: string):Observable<siteLoginResponse> {
    return this.post<SiteLogin, siteLoginResponse>(`auth/login`, { sitePass }).pipe(
      tap(response => {
        localStorage.setItem('bearerToken', response.token);
      })
    );
  }
  
}



import { Inject, Injectable } from '@angular/core';
import { HttpHandlerService } from '../../shared/services/http-handler.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends HttpHandlerService {

  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
    super(http,baseUrl);
  }

  getAllItems(): Observable<Item[]> {
    return this.get<Item[]>('items/GetAll');
  }


}

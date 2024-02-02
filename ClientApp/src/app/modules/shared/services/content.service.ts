import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DictionaryEntry } from 'src/app/models/Content.model';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends HttpHandlerService {
  private readonly storageKey = 'Dictionary';
  private dictionarySubject = new BehaviorSubject<DictionaryEntry[]>([]);
  public readonly dictionary$ = this.dictionarySubject.asObservable();

  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
    super(http, baseUrl);
    this.initializeDictionary();
  }

  private initializeDictionary() {
    let dictFromLocalStorage = this.getDictionaryFromLocalStorage()
    if(dictFromLocalStorage && dictFromLocalStorage.length){
      this.setDictionary(dictFromLocalStorage)
      return;
    }
    this.get<DictionaryEntry[]>('content/GetAll').pipe(
      tap(data => {
        if(data && data.length) this.setDictionary(data)
      })
    ).subscribe();
  }

  get currentDictionary(): DictionaryEntry[] {
    return this.dictionarySubject.value;
  }

  setDictionary(newDictionary: DictionaryEntry[]): void {
    localStorage.setItem(this.storageKey ,JSON.stringify(newDictionary))
    this.dictionarySubject.next(newDictionary);
  }

  getDictionaryFromLocalStorage(): DictionaryEntry[]{
    return JSON.parse(localStorage.getItem(this.storageKey) as string)
  }
}

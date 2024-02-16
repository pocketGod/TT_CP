import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContentResponse, DictionaryEntry, MediaEntry } from 'src/app/models/Content.model';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends HttpHandlerService {
  private readonly storageKey = 'Content';

  private dictionarySubject = new BehaviorSubject<DictionaryEntry[]>([]);
  public readonly dictionary$ = this.dictionarySubject.asObservable();

  private mediaSubject = new BehaviorSubject<MediaEntry[]>([]);
  public readonly media$ = this.mediaSubject.asObservable();


  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
    super(http, baseUrl);
    this.initializeContent();
  }

  private initializeContent() {

    let contentFromLocalStorage = this.getContentFromLocalStorage()
    if(contentFromLocalStorage && (contentFromLocalStorage.translations?.length || contentFromLocalStorage.mediaItems?.length)){
      this.setContent(contentFromLocalStorage)
      return;
    }
    this.get<ContentResponse>('content/GetAll').pipe(
      
      tap(data => {
        if(data && (data.translations?.length || data.mediaItems?.length)) this.setContent(data)
      })
    ).subscribe();

  }


  get currentDictionary(): DictionaryEntry[] {
    return this.dictionarySubject.value;
  }

  get currentMedia(): MediaEntry[] {
    return this.mediaSubject.value;
  }

  private setContent(newContent: ContentResponse): void {
    // console.log('data',newContent);

    localStorage.setItem(this.storageKey ,JSON.stringify(newContent))
    this.dictionarySubject.next(newContent.translations);
    this.mediaSubject.next(newContent.mediaItems);
  }

  private getContentFromLocalStorage(): ContentResponse{
    return JSON.parse(localStorage.getItem(this.storageKey) as string)
  }
}

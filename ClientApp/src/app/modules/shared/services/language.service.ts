import { Injectable } from '@angular/core';
import { Language } from 'src/app/models/Content.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly storageKey = 'LanguagePreference';
  private currentLang: Language;

  constructor() {
    this.currentLang = this.getLanguageFromStorage() || Language.English;
  }

  private getLanguageFromStorage(): Language | null {
    const storedLang = localStorage.getItem(this.storageKey);
    return storedLang ? storedLang as Language : null;
  }

  public getCurrentLang(): Language {
    return this.currentLang;
  }

  public setCurrentLang(lang: Language): void {
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
  }
}

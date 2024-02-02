import { Injectable } from '@angular/core';
import { Language } from 'src/app/models/Content.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly storageKey = 'LanguagePreference';
  private currentLang!: Language;

  constructor() {
    let lang = this.getLanguageFromStorage();
    if(lang) this.currentLang = lang;
    else {
      this.currentLang = Language.English;
      this.setCurrentLang(Language.English);
    }
    this.setBodyDirection();
  }

  public getCurrentLang(): Language {
    return this.currentLang;
  }

  public setCurrentLang(lang: Language): void {
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
    this.setBodyDirection();
  }
  
  private getLanguageFromStorage(): Language | null {
    const storedLang = localStorage.getItem(this.storageKey);
    return storedLang ? storedLang as Language : null;
  }

  private setBodyDirection(): void {
    const dir = this.currentLang === Language.Hebrew ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', dir);
  }
}

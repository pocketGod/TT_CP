import { DictionaryEntry, LanguageString } from "src/app/models/Content.model";
import { LanguageService } from "../services/language.service";

export class ContentHelper {
    static updateElementText(
      el: HTMLElement, 
      dictionary: DictionaryEntry[] | null, 
      key: string | null,
      text: LanguageString | null, 
      langService: LanguageService
    ): void {
      const currentLang = langService.getCurrentLang();
      let displayText = '';
  
      if (key && dictionary) {
        const entry = dictionary.find(entry => entry.key === key);
        displayText = entry ? entry.value[currentLang] : `[${key}]`;
      } else if (text) {
        displayText = text[currentLang];
      }
  
      el.innerText = displayText;
    }
}
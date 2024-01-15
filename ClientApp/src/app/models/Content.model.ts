import { ObjectId } from "./Utils.model";

export interface LanguageString {
    hebrew: string;
    english: string;
}
  
export interface DictionaryEntry {
    id: ObjectId;
    key: string;
    value: LanguageString;
}

export enum Language {
    Hebrew = 'hebrew',
    English = 'english'
}

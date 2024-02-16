import { ObjectId } from "./Utils.model";


export interface ContentResponse{
    translations:DictionaryEntry[],
    mediaItems: MediaEntry[]
}


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


export interface MediaEntry {
    id: ObjectId;
    key: string;
    url: string;
}
import { LanguageString } from "./Content.model";
import { ObjectId } from "./Utils.model";

export interface Item {
    id: ObjectId;
    title: LanguageString;
    subTitle: LanguageString;
    year: number;
    description: LanguageString;
    images: string[];
    video: string;
    isActive: boolean;
}
  
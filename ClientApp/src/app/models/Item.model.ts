import { LanguageString } from "./Content.model";
import { ProjectTypes } from "./Enums.model";
import { ObjectId } from "./Utils.model";

export interface Item {
    id: ObjectId;
    title: LanguageString;
    subTitle: LanguageString;
    year: number;
    description: LanguageString;
    images: string[];
    video: string;
    cover: string;
    isActive: boolean;
    type: ProjectTypes
}
  
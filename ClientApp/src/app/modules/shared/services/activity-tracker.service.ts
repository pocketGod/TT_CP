import { Injectable } from '@angular/core';
import { ProjectTypes } from 'src/app/models/Enums.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackerService {

  siteSection:ProjectTypes = ProjectTypes.Other;


  constructor() { }

  setSiteSection(path:ProjectTypes){
    this.siteSection = path;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectTypes } from 'src/app/models/Enums.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackerService {

  siteSection:ProjectTypes = ProjectTypes.Other;

  private siteSectionSubject = new BehaviorSubject<ProjectTypes>(ProjectTypes.Other);
  public readonly siteSection$ = this.siteSectionSubject.asObservable();



  constructor() { }

  setSiteSection(path:ProjectTypes){
    this.siteSection = path;
    this.siteSectionSubject.next(path)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectTypes } from 'src/app/models/Enums.model';
import { ActivityTrackerService } from 'src/app/modules/shared/services/activity-tracker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  siteSection:ProjectTypes = ProjectTypes.Other;
  constructor(private acTrack:ActivityTrackerService, private router:Router) {
    
    this.siteSection = this.acTrack.siteSection
    
   }


  ngOnInit(): void {
    // this.router.navigate(['/item', encodeURIComponent('Test_Item')]);
  }

  setSiteSection(section:ProjectTypes){
    this.acTrack.setSiteSection(section)
    this.siteSection = section
  }

  scrollToAboutUs(): void {
    document.getElementById('aboutUsSiteSection')?.scrollIntoView({ behavior: 'smooth' });
  }



}

import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Announcement, AnnouncementsService} from '../announcements';
import { AnnouncementModalComponent, AnnouncementModalDirective} from './';
import {UserService} from "../core";


@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css'],
  providers : [AnnouncementsService],
  entryComponents : [AnnouncementModalComponent]
})
export class BulletinBoardComponent implements OnInit {

 public selectedAnnouncement : Announcement;
 public modalData : any;
  private viewContainerRef: ViewContainerRef;
  public announcements : Announcement[];
  constructor(private announcementsService : AnnouncementsService,  viewContainerRef:ViewContainerRef) { 
    this.announcementsService.getAllForUser().subscribe( list => {
      this.announcements = list;
    });
    this.viewContainerRef = viewContainerRef;
    //this.announcements = this.announcementsService.Announcements;
  }

  ngOnInit() {
  }

  select(ann:Announcement){
    this.selectedAnnouncement =ann;
    this.modalData = {
      component : AnnouncementModalComponent,
      inputs : {
        announcementInput : ann
      }
    };
  }

  create(){
     this.modalData = {
      component : AnnouncementModalComponent,
      inputs : {
        announcementInput : undefined
      }
    };
  }

}

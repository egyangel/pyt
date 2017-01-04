import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent} from './announcement/announcement.component';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementsService, LikeService} from './';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [
  	AnnouncementsService,
  	LikeService
  ],
  exports : [AnnouncementsComponent, AnnouncementComponent],
  declarations: [AnnouncementsComponent, AnnouncementComponent]
})
export class AnnouncementsModule { }

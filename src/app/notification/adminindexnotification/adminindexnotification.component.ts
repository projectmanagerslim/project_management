


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminindexnotification',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './adminindexnotification.component.html',
  styleUrl: './adminindexnotification.component.css'
})
export class AdminindexnotificationComponent {


  Notifications: Notification[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public NotificationService: NotificationService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.NotificationService.getAll().subscribe((data: Notification[])=>{
      this.Notifications = data;
      console.log(this.Notifications);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteNotification(idnotif:number){
    this.NotificationService.delete(idnotif).subscribe(res => {
         this.Notifications = this.Notifications.filter(item => item.idnotif !== idnotif);
         console.log('Notification deleted successfully!');
    })
  }
}
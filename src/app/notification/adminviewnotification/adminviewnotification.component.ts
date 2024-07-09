

import { Component } from '@angular/core';
  
import { NotificationService } from '../notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '../notification';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminviewnotification',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminviewnotification.component.html',
  styleUrl: './adminviewnotification.component.css'
})
export class AdminviewnotificationComponent {
  
  id!: number;
  Notification!: Notification;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public NotificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['NotificationId'];
          
    this.NotificationService.find(this.id).subscribe((data: Notification)=>{
      this.Notification = data;
    });
  }
  
}
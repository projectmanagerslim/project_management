

import { Component } from '@angular/core';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurviewmessage',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './developpeurviewmessage.component.html',
  styleUrl: './developpeurviewmessage.component.css'
})
export class DeveloppeurviewmessageComponent {
  
  id!: number;
  Message!: Message;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public MessageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['MessageId'];
          
    this.MessageService.find(this.id).subscribe((data: Message)=>{
      this.Message = data;
    });
  }
  
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurindexmessage',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './developpeurindexmessage.component.html',
  styleUrl: './developpeurindexmessage.component.css'
})
export class DeveloppeurindexmessageComponent {


  Messages: Message[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public MessageService: MessageService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.MessageService.getAll().subscribe((data: Message[])=>{
      this.Messages = data;
      console.log(this.Messages);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteMessage(idmessage:number){
    this.MessageService.delete(idmessage).subscribe(res => {
         this.Messages = this.Messages.filter(item => item.idmessage !== idmessage);
         console.log('Message deleted successfully!');
    })
  }
}
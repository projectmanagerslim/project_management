

import { Component } from '@angular/core';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminviewmessage',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminviewmessage.component.html',
  styleUrl: './adminviewmessage.component.css'
})
export class AdminviewmessageComponent {
  
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
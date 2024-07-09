

import { Component } from '@angular/core';
  
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurviewuser',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './developpeurviewuser.component.html',
  styleUrl: './developpeurviewuser.component.css'
})
export class DeveloppeurviewuserComponent {
  
  id!: number;
  User!: User;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['UserId'];
          
    this.UserService.find(this.id).subscribe((data: User)=>{
      this.User = data;
    });
  }
  
}
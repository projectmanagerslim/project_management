


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurtindexabsence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './developpeurindexadmin.component.html',
  styleUrl: './developpeurindexadmin.component.css'
})
export class DeveloppeurindexadminComponent {


  Admins: Admin[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public AdminService: AdminService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.AdminService.getAll().subscribe((data: Admin[])=>{
      this.Admins = data;
      console.log(this.Admins);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAdmin(id:number){
    this.AdminService.delete(id).subscribe(res => {
         this.Admins = this.Admins.filter(item => item.id !== id);
         console.log('Admin deleted successfully!');
    })
  }
}
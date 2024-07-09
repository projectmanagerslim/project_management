

import { Component } from '@angular/core';
  
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetviewadmin',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './chefdeprojetviewadmin.component.html',
  styleUrl: './chefdeprojetviewadmin.component.css'
})
export class ChefdeprojetviewadminComponent {
  
  id!: number;
  Admin!: Admin;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AdminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AdminId'];
          
    this.AdminService.find(this.id).subscribe((data: Admin)=>{
      this.Admin = data;
    });
  }
  
}
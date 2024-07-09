


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CongeService } from '../conge.service';
import { Conge } from '../conge';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurindexconge',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './developpeurindexconge.component.html',
  styleUrl: './developpeurindexconge.component.css'
})
export class DeveloppeurindexcongeComponent {


  Conges: Conge[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public CongeService: CongeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.CongeService.getAll().subscribe((data: Conge[])=>{
      this.Conges = data;
      console.log(this.Conges);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteConge(id:number){
    this.CongeService.delete(id).subscribe(res => {
         this.Conges = this.Conges.filter(item => item.id !== id);
         console.log('Conge deleted successfully!');
    })
  }
}
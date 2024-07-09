


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffectiongroupeService } from '../affectiongroupe.service';
import { Affectiongroupe } from '../affectiongroupe';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetindexaffectationgroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './chefdeprojetindexaffectationgroupe.component.html',
  styleUrl: './chefdeprojetindexaffectationgroupe.component.css'
})
export class ChefdeprojetindexaffectationgroupeComponent {


  Affectiongroupes: Affectiongroupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public AffectiongroupeService: AffectiongroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.AffectiongroupeService.getAll().subscribe((data: Affectiongroupe[])=>{
      this.Affectiongroupes = data;
      console.log(this.Affectiongroupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffectationgroupe(idgroup:number){
    this.AffectiongroupeService.delete(idgroup).subscribe(res => {
         this.Affectiongroupes = this.Affectiongroupes.filter(item => item.idgroup !== idgroup);
         console.log('Affectationgroupe deleted successfully!');
    })
  }
}
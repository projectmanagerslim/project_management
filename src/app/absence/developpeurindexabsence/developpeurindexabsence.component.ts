


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AbsenceService } from '../absence.service';
import { Absence } from '../absence';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurindexabsence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './developpeurindexabsence.component.html',
  styleUrl: './developpeurindexabsence.component.css'
})
export class DeveloppeurindexabsenceComponent {


  Absences: Absence[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public AbsenceService: AbsenceService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.AbsenceService.getAll().subscribe((data: Absence[])=>{
      this.Absences = data;
      console.log(this.Absences);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAbsence(id:number){
    this.AbsenceService.delete(id).subscribe(res => {
         this.Absences = this.Absences.filter(item => item.id !== id);
         console.log('Absence deleted successfully!');
    })
  }
}
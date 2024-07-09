

import { Component } from '@angular/core';
  
import { AbsenceService } from '../absence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../absence';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminviewabsence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminviewabsence.component.html',
  styleUrl: './adminviewabsence.component.css'
})
export class AdminviewabsenceComponent {
  
  id!: number;
  Absence!: Absence;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AbsenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AbsenceId'];
          
    this.AbsenceService.find(this.id).subscribe((data: Absence)=>{
      this.Absence = data;
    });
  }
  
}
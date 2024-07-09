

import { Component } from '@angular/core';
  
import { AffectiongroupeService } from '../affectiongroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affectiongroupe } from '../affectiongroupe';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurviewaffectationgroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './developpeurviewaffectationgroupe.component.html',
  styleUrl: './developpeurviewaffectationgroupe.component.css'
})
export class DeveloppeurviewaffectationgroupeComponent {
  
  id!: number;
  Affectationgroupe!: Affectiongroupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AffectationgroupeService: AffectiongroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AffectationgroupeId'];
          
    this.AffectationgroupeService.find(this.id).subscribe((data: Affectiongroupe)=>{
      this.Affectationgroupe = data;
    });
  }
  
}
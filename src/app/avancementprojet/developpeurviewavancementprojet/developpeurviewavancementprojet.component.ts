

import { Component } from '@angular/core';
  
import { AvancementprojetService } from '../avancementprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avancementprojet } from '../avancementprojet';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurtviewavancementprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './developpeurviewavancementprojet.component.html',
  styleUrl: './developpeurviewavancementprojet.component.css'
})
export class DeveloppeurtviewavancementprojetComponent {
  
  id!: number;
  Avancementprojet!: Avancementprojet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AvancementprojetService: AvancementprojetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AvancementprojetId'];
          
    this.AvancementprojetService.find(this.id).subscribe((data: Avancementprojet)=>{
      this.Avancementprojet = data;
    });
  }
  
}
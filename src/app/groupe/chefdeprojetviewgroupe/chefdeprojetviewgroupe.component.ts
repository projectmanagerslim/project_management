

import { Component } from '@angular/core';
  
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../groupe';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetviewgroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './chefdeprojetviewgroupe.component.html',
  styleUrl: './chefdeprojetviewgroupe.component.css'
})
export class ChefdeprojetviewgroupeComponent {
  
  id!: number;
  Groupe!: Groupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public GroupeService: GroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['GroupeId'];
          
    this.GroupeService.find(this.id).subscribe((data: Groupe)=>{
      this.Groupe = data;
    });
  }
  
}
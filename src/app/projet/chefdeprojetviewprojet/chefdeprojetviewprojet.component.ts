

import { Component } from '@angular/core';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetviewprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './chefdeprojetviewprojet.component.html',
  styleUrl: './chefdeprojetviewprojet.component.css'
})
export class ChefdeprojetviewprojetComponent {
  
  id!: number;
  Projet!: Projet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ProjetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ProjetId'];
          
    this.ProjetService.find(this.id).subscribe((data: Projet)=>{
      this.Projet = data;
    });
  }
  
}
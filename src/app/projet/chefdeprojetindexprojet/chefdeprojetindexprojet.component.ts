


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetindexprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './chefdeprojetindexprojet.component.html',
  styleUrl: './chefdeprojetindexprojet.component.css'
})
export class ChefdeprojetindexprojetComponent {


  Projets: Projet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public ProjetService: ProjetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.ProjetService.getAll().subscribe((data: Projet[])=>{
      this.Projets = data;
      console.log(this.Projets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProjet(id:number){
    this.ProjetService.delete(id).subscribe(res => {
         this.Projets = this.Projets.filter(item => item.id !== id);
         console.log('Projet deleted successfully!');
    })
  }
}
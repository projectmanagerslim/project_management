


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvancementprojetService } from '../avancementprojet.service';
import { Avancementprojet } from '../avancementprojet';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetindexavancementprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './chefdeprojetindexavancementprojet.component.html',
  styleUrl: './chefdeprojetindexavancementprojet.component.css'
})
export class ChefdeprojetindexavancementprojetComponent {


  Avancementprojets: Avancementprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public AvancementprojetService: AvancementprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.AvancementprojetService.getAll().subscribe((data: Avancementprojet[])=>{
      this.Avancementprojets = data;
      console.log(this.Avancementprojets);
    })  
  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvancementprojet(idprojet:number){
    this.AvancementprojetService.delete(idprojet).subscribe(res => {
         this.Avancementprojets = this.Avancementprojets.filter(item => item.idprojet !== idprojet);
         console.log('Avancementprojet deleted successfully!');
    })
  }
}
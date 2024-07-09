


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { GroupeService } from '../groupe.service';
import { Groupe } from '../groupe';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetindexgroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './chefdeprojetindexgroupe.component.html',
  styleUrl: './chefdeprojetindexgroupe.component.css'
})
export class ChefdeprojetindexgroupeComponent {


  Groupes: Groupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public GroupeService: GroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.GroupeService.getAll().subscribe((data: Groupe[])=>{
      this.Groupes = data;
      console.log(this.Groupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteGroupe(id:number){
    this.GroupeService.delete(id).subscribe(res => {
         this.Groupes = this.Groupes.filter(item => item.id !== id);
         console.log('Groupe deleted successfully!');
    })
  }
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurindexprofil',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './developpeurindexprofil.component.html',
  styleUrl: './developpeurindexprofil.component.css'
})
export class DeveloppeurindexprofilComponent {


  Profils: Profil[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public ProfilService: ProfilService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.ProfilService.getAll().subscribe((data: Profil[])=>{
      this.Profils = data;
      console.log(this.Profils);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProfil(id:number){
    this.ProfilService.delete(id).subscribe(res => {
         this.Profils = this.Profils.filter(item => item.id !== id);
         console.log('Profil deleted successfully!');
    })
  }
}
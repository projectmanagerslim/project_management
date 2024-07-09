

import { Component } from '@angular/core';
  
import { ProfilService } from '../profil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminviewprofil',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminviewprofil.component.html',
  styleUrl: './adminviewprofil.component.css'
})
export class AdminviewprofilComponent {
  
  id!: number;
  Profil!: Profil;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ProfilService: ProfilService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ProfilId'];
          
    this.ProfilService.find(this.id).subscribe((data: Profil)=>{
      this.Profil = data;
    });
  }
  
}
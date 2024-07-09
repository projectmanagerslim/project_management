


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvancementtacheService } from '../avancementtache.service';
import { Avancementtache } from '../avancementtache';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminindexavancementtache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './adminindexavancementtache.component.html',
  styleUrl: './adminindexavancementtache.component.css'
})
export class AdminindexavancementtacheComponent {


  Avancementtaches: Avancementtache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public AvancementtacheService: AvancementtacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.AvancementtacheService.getAll().subscribe((data: Avancementtache[])=>{
      this.Avancementtaches = data;
      console.log(this.Avancementtaches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvancementtache(idAtache:number){
    this.AvancementtacheService.delete(idAtache).subscribe(res => {
         this.Avancementtaches = this.Avancementtaches.filter(item => item.idAtache !== idAtache);
         console.log('Avancementtache deleted successfully!');
    })
  }
}


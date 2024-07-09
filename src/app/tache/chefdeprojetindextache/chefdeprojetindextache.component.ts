


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TacheService } from '../tache.service';
import { Tache } from '../tache';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetindextache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, RouterModule],
  templateUrl: './chefdeprojetindextache.component.html',
  styleUrl: './chefdeprojetindextache.component.css'
})
export class ChefdeprojetindextacheComponent {


  Taches: Tache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public TacheService: TacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.TacheService.getAll().subscribe((data: Tache[])=>{
      this.Taches = data;
      console.log(this.Taches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTache(id:number){
    this.TacheService.delete(id).subscribe(res => {
         this.Taches = this.Taches.filter(item => item.id !== id);
         console.log('Tache deleted successfully!');
    })
  }
}


import { Component } from '@angular/core';
  
import { CongeService } from '../conge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from '../conge';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminviewconge',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminviewconge.component.html',
  styleUrl: './adminviewconge.component.css'
})
export class AdminviewcongeComponent {
  
  id!: number;
  Conge!: Conge;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public CongeService: CongeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['CongeId'];
          
    this.CongeService.find(this.id).subscribe((data: Conge)=>{
      this.Conge = data;
    });
  }
  
}
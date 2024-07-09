

import { Component } from '@angular/core';
  
import { AvancementtacheService } from '../avancementtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avancementtache } from '../avancementtache';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurviewavancementtache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './developpeurviewavancementtache.component.html',
  styleUrl: './developpeurviewavancementtache.component.css'
})
export class DeveloppeurviewavancementtacheComponent {
  
  id!: number;
  Avancementtache!: Avancementtache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AvancementtacheService: AvancementtacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AvancementtacheId'];
          
    this.AvancementtacheService.find(this.id).subscribe((data: Avancementtache)=>{
      this.Avancementtache = data;
    });
  }
  
}
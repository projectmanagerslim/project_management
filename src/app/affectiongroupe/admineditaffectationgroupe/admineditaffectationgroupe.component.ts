


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffectiongroupeService } from '../affectiongroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affectiongroupe } from '../affectiongroupe';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admineditaffectation',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './admineditaffectationgroupe.component.html',
  styleUrl: './admineditaffectationgroupe.component.css'
})
export class AdmineditaffectationComponent {
  
  id!: number;
  datea!: number;
  duree!: number;
  typea!: number;
  Affectiongroupe!: Affectiongroupe;
  form!: FormGroup;

      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AffectiongroupeService: AffectiongroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AffectationgroupeId'];
    this.AffectiongroupeService.find(this.id).subscribe((data: Affectiongroupe)=>{
      this.Affectiongroupe = data;
    }); 
        
    this.form = new FormGroup({
      _id: new FormControl('', [Validators.required]),
      dateab: new FormControl('', Validators.required) ,
      duree: new FormControl('', Validators.required),
      typeabce: new FormControl('', Validators.required)
    });
  }

      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.AffectiongroupeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Affectationgroupe updated successfully!');
         this.router.navigateByUrl('Affectationgroupe/index');
    })
  }
  
}
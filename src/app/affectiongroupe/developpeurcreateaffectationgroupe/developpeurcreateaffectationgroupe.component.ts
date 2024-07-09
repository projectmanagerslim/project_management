
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffectiongroupeService } from '../affectiongroupe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurcreateaffectiongroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreateaffectationgroupe.component.html',
  styleUrl: './developpeurcreateaffectationgroupe.component.css'
})
export class DeveloppeurcreateaffectiongroupeComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AffectiongroupeService: AffectiongroupeService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      dateAffectiongroupe: new FormControl('', [Validators.required]),
      duree: new FormControl('', [Validators.required]),
      typeAffectiongroupe: new FormControl('', Validators.required)
    });
  }
/*

f html partie html les nom des champs selon ce modele Affectiongroupe fhemtni ou pas ??
oui
hetha f create
je vais faire la liste tawa

*/
      
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
    this.AffectiongroupeService.create(this.form.value).subscribe((res:any) => {
         console.log('Affectiongroupe created successfully!');
         this.router.navigateByUrl('Affectiongroupe/index');
    })
  }
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AbsenceService } from '../absence.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreateabsence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './admincreateabsence.component.html',
  styleUrl: './admincreateabsence.component.css'
})
export class AdmincreateabsenceComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AbsenceService: AbsenceService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      dateabsence: new FormControl('', [Validators.required]),
      duree: new FormControl('', [Validators.required]),
      typeabsence: new FormControl('', Validators.required)
    });
  }
/*

f html partie html les nom des champs selon ce modele absence fhemtni ou pas ??
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
    this.AbsenceService.create(this.form.value).subscribe((res:any) => {
         console.log('Absence created successfully!');
         this.router.navigateByUrl('Absence/index');
    })
  }
  
}
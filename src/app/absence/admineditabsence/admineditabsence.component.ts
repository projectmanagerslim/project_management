


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AbsenceService } from '../absence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../absence';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admineditabsence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './admineditabsence.component.html',
  styleUrl: './admineditabsence.component.css'
})
export class AdmineditabsenceComponent {
  
  id!: number;
  dateabsence!: number;
  duree!: number;
  typeabsence!: number;
  Absence!: Absence;
  form!: FormGroup;

      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AbsenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AbsenceId'];
    this.AbsenceService.find(this.id).subscribe((data: Absence)=>{
      this.Absence = data;
    }); 
        
    this.form = new FormGroup({
      _id: new FormControl('', [Validators.required]),
      dateabsence: new FormControl('', Validators.required) ,
      duree: new FormControl('', Validators.required),
      typeabsence: new FormControl('', Validators.required)
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
    this.AbsenceService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Absence updated successfully!');
         this.router.navigateByUrl('Absence/index');
    })
  }
  
}
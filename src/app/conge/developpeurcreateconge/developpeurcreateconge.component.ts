
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CongeService } from '../conge.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreateconge',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreateconge.component.html',
  styleUrl: './developpeurcreateconge.component.css'
})
export class DeveloppeurcreatecongeComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public CongeService: CongeService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      datesortie: new FormControl('', Validators.required) ,
      dateretour: new FormControl('', Validators.required),
      etat: new FormControl('', Validators.required)
    });
  }
/*
  
    
f html partie html les nom des champs selon ce modele Conge fhemtni ou pas ??
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
    this.CongeService.create(this.form.value).subscribe((res:any) => {
         console.log('Conge created successfully!');
         this.router.navigateByUrl('Conge/index');
    })
  }
  
}
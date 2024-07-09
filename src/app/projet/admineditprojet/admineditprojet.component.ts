


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admineditprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './admineditprojet.component.html',
  styleUrl: './admineditprojet.component.css'
})
export class AdmineditprojetComponent {
  
  id!: number;
  nom!: number;
  budget!: number;
  priorite!: number;
  datedebut!: number;
  datefin!: number;
  datecreation!: number;
  Projet!: Projet;
  form!: FormGroup;

      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ProjetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ProjetId'];
    this.ProjetService.find(this.id).subscribe((data: Projet)=>{
      this.Projet = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', Validators.required) ,
      budget: new FormControl('', Validators.required),
      priorite: new FormControl('', Validators.required)  ,
      datedebut: new FormControl('', Validators.required) ,
      datefin: new FormControl('', Validators.required) ,
      datecreation: new FormControl('', Validators.required) 
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
    this.ProjetService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Projet updated successfully!');
         this.router.navigateByUrl('Projet/index');
    })
  }
  
}
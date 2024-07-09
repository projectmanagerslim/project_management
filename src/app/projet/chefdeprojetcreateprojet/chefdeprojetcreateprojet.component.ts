
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProjetService } from '../projet.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetcreateprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojetcreateprojet.component.html',
  styleUrl: './chefdeprojetcreateprojet.component.css'
})
export class ChefdeprojetcreateprojetComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ProjetService: ProjetService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      priorite: new FormControl('', Validators.required) ,
      datedebut: new FormControl('', Validators.required) ,
      datefin: new FormControl('', Validators.required) ,
      datecreation: new FormControl('', Validators.required) 
    });
  }
/*

 id: string;


f html partie html les nom des champs selon ce modele Projet fhemtni ou pas ??
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
    this.ProjetService.create(this.form.value).subscribe((res:any) => {
         console.log('Projet created successfully!');
         this.router.navigateByUrl('Projet/index');
    })
  }
  
}
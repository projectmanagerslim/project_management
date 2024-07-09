


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProfilService } from '../profil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojeteditprofil',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojeteditprofil.component.html',
  styleUrl: './chefdeprojeteditprofil.component.css'
})
export class ChefdeprojeteditprofilComponent {
  
  id!: number;
  description!: number;
  etat!: number;
  Profil!: Profil;
  form!: FormGroup;

  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ProfilService: ProfilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ProfilId'];
    this.ProfilService.find(this.id).subscribe((data: Profil)=>{
      this.Profil = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required) ,
      etat: new FormControl('', Validators.required),
      
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
    this.ProfilService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Profil updated successfully!');
         this.router.navigateByUrl('Profil/index');
    })
  }
  
}
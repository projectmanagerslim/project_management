


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvancementprojetService } from '../avancementprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avancementprojet } from '../avancementprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeureditavancementprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditavancementprojet.component.html',
  styleUrl: './developpeureditavancementprojet.component.css'
})
export class DeveloppeureditavancementprojetComponent {
  
  idprojet!: number;
  Tache!: string;
  responsable!: string;
  Datedébut!: Date;
  Datefinprevue!: Date;
  Datefinreelle!: Date;
  progression!: string;
  Avancementprojet!: Avancementprojet;
  form!: FormGroup;


      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AvancementprojetService: AvancementprojetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.idprojet = this.route.snapshot.params['AvancementprojetId'];
    this.AvancementprojetService.find(this.idprojet).subscribe((data: Avancementprojet)=>{
      this.Avancementprojet = data;
    }); 
        
    this.form = new FormGroup({
      idprojet: new FormControl('', [Validators.required]),
      Tache: new FormControl('', Validators.required) ,
      responsable: new FormControl('', Validators.required),
      Datedébut: new FormControl('', Validators.required) ,
      Datefinprevue: new FormControl('', Validators.required) ,
      Datefinreelle: new FormControl('', Validators.required) ,
      progression: new FormControl('', Validators.required) 

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
    this.AvancementprojetService.update(this.idprojet, this.form.value).subscribe((res:any) => {
         console.log('Avancementprojet updated successfully!');
         this.router.navigateByUrl('Avancementprojet/index');
    })
  }
  
}
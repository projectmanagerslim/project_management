


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvancementtacheService } from '../avancementtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avancementtache } from '../avancementtache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojeteditavancementtache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditavancementtache.component.html',
  styleUrl: './developpeureditavancementtache.component.css'
})
export class DeveloppeureditavancementtacheComponent {
  
  idAtache!: number;
  description!: number;
  qualite!: number;
  etat!: number;
  Avancementtache!: Avancementtache;
  form!: FormGroup;

  


      
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
    this.idAtache = this.route.snapshot.params['AvancementtacheId'];
    this.AvancementtacheService.find(this.idAtache).subscribe((data: Avancementtache)=>{
      this.Avancementtache = data;
    }); 
        
    this.form = new FormGroup({
      idAtache: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required) ,
      qualite: new FormControl('', Validators.required),
      etat: new FormControl('', Validators.required)
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
    this.AvancementtacheService.update(this.idAtache, this.form.value).subscribe((res:any) => {
         console.log('Avancementtache updated successfully!');
         this.router.navigateByUrl('Avancementtache/index');
    })
  }
  
}
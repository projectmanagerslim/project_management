
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvancementtacheService } from '../avancementtache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreateavancementtache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreateavancementtache.component.html',
  styleUrl: './developpeurcreateavancementtache.component.css'
})
export class DeveloppeurcreateavancementtacheComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AvancementtacheService: AvancementtacheService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      idAtache: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      qualité: new FormControl('', Validators.required) ,
      etat: new FormControl('', Validators.required)
    });
  }
/*

  idAtache: string;
    description: string;
    qualité: string;
    etat: string;
    

f html partie html les nom des champs selon ce modele Avancementtache fhemtni ou pas ??
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
    this.AvancementtacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Avancementtache created successfully!');
         this.router.navigateByUrl('Avancementtache/index');
    })
  }
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvancementprojetService } from '../avancementprojet.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreateavancementprojet',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreateavancementprojet.component.html',
  styleUrl: './developpeurcreateavancementprojet.component.css'
})
export class DeveloppeurcreateavancementprojetComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AvancementprojetService: AvancementprojetService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      idprojet: new FormControl('', [Validators.required]),
      Tache: new FormControl('', [Validators.required]),
      responsable: new FormControl('', Validators.required) ,
      Datedébut: new FormControl('', Validators.required),
      Datefinprevue: new FormControl('', Validators.required),
      Datefinreelle: new FormControl('', Validators.required),
      progression: new FormControl('', Validators.required)

    });
  }
/*

f html partie html les nom des champs selon ce modele avancementprojet fhemtni ou pas ??
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
    this.AvancementprojetService.create(this.form.value).subscribe((res:any) => {
         console.log('Avancementprojet created successfully!');
         this.router.navigateByUrl('Avancementprojet/index');
    })
  }
  
}
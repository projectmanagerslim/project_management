
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TacheService } from '../tache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreatetache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './admincreatetache.component.html',
  styleUrl: './admincreatetache.component.css'
})
export class AdmincreatetacheComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public TacheService: TacheService,
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
      idprojet: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required) ,
      actions: new FormControl('', Validators.required) ,
      datedebut: new FormControl('', Validators.required) ,
      datefin: new FormControl('', Validators.required) 
    });
  }
/*



f html partie html les nom des champs selon ce modele Tache fhemtni ou pas ??
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
    this.TacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Tache created successfully!');
         this.router.navigateByUrl('Tache/index');
    })
  }
  
}
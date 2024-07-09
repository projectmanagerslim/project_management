


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetedittache',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojetedittache.component.html',
  styleUrl: './chefdeprojetedittache.component.css'
})
export class ChefdeprojetedittacheComponent {
  
  id!: number;
  idprojet!: number;
  description!: string;
  actions!: string;
  datedebut!: Date;
  datefin!: Date;
  Tache!: Tache;
  form!: FormGroup;

      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public TacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['TacheId'];
    this.TacheService.find(this.id).subscribe((data: Tache)=>{
      this.Tache = data;
    }); 
        
    this.form = new FormGroup({
      _id: new FormControl('', [Validators.required]),
      idprojet: new FormControl('', Validators.required) ,
      description: new FormControl('', Validators.required),
      actions: new FormControl('', Validators.required) ,
      datedebut: new FormControl('', Validators.required) ,
      datefin: new FormControl('', Validators.required) 
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
    this.TacheService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Tache updated successfully!');
         this.router.navigateByUrl('Tache/index');
    })
  }
  
}
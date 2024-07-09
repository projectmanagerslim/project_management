


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CongeService } from '../conge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from '../conge';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojeteditconge',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojeteditconge.component.html',
  styleUrl: './chefdeprojeteditconge.component.css'
})
export class ChefdeprojeteditcongeComponent {
  
  id!: number;
  description!: string;
  datesortie!: Date;
  dateretour!: Date;
  etat!: string;
  Conge!: Conge;
  form!: FormGroup;

  
 
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public CongeService: CongeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['CongeId'];
    this.CongeService.find(this.id).subscribe((data: Conge)=>{
      this.Conge = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required) ,
      datesortie: new FormControl('', Validators.required),
      dateretour: new FormControl('', Validators.required) ,
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
    this.CongeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Conge updated successfully!');
         this.router.navigateByUrl('Conge/index');
    })
  }
  
}
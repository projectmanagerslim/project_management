


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../competence';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojeteditCompetence',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojeteditCompetence.component.html',
  styleUrl: './chefdeprojeteditCompetence.component.css'
})
export class ChefdeprojeteditCompetenceComponent {
  
  id!: number;
  nom!: string;
  description!: string;
  datecreation!: Date;
  etat!: string;
  Competence!: Competence;
  form!: FormGroup;

  

      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public CompetenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      

  
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['CompetenceId'];
    this.CompetenceService.find(this.id).subscribe((data: Competence)=>{
      this.Competence = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', Validators.required) ,
      description: new FormControl('', Validators.required),
      datecreation: new FormControl('', Validators.required) ,
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
    this.CompetenceService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Competence updated successfully!');
         this.router.navigateByUrl('Competence/index');
    })
  }
  
}
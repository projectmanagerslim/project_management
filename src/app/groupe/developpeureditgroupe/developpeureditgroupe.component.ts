


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../groupe';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojeteditgroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditgroupe.component.html',
  styleUrl: './developpeureditgroupe.component.css'
})
export class DeveloppeureditgroupeComponent {
  
  id!: number;
  nom!: string;
  description!: string;
  categorie!: string;
  datecreation!: Date;
  datemodifcation!: Date;
  Groupe!: Groupe;
  form!: FormGroup;



      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public GroupeService: GroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['GroupeId'];
    this.GroupeService.find(this.id).subscribe((data: Groupe)=>{
      this.Groupe = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', Validators.required) ,
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required) ,
      datecreation: new FormControl('', Validators.required) ,
      datemodifcation: new FormControl('', Validators.required) 
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
    this.GroupeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Groupe updated successfully!');
         this.router.navigateByUrl('Groupe/index');
    })
  }
  
}
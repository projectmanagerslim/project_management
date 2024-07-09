
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { GroupeService } from '../groupe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-admincreategroupe',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreategroupe.component.html',
  styleUrl: './developpeurcreategroupe.component.css'
})
export class DeveloppeurcreategroupeComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public GroupeService: GroupeService,
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
      description: new FormControl('', [Validators.required]),
      categorie: new FormControl('', Validators.required) ,
      datecreation: new FormControl('', Validators.required) ,
      datemodifcation: new FormControl('', Validators.required)
    });
  }
/*


    

f html partie html les nom des champs selon ce modele  fhemtni ou pas ??
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
    this.GroupeService.create(this.form.value).subscribe((res:any) => {
         console.log('Groupe created successfully!');
         this.router.navigateByUrl('Groupe/index');
    })
  }
  
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeuredituser',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeuredituser.component.html',
  styleUrl: './developpeuredituser.component.css'
})
export class DeveloppeuredituserComponent {
  
  id!: number;
  nom!: number;
  prenom!: number;
  mdp!: number;
  datecreation!: number
  statut!: number
  User!: User;
  form!: FormGroup;

 
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['UserId'];
    this.UserService.find(this.id).subscribe((data: User)=>{
      this.User = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', Validators.required) ,
      mdp: new FormControl('', Validators.required),
      datecreation: new FormControl('', Validators.required) ,
      statut: new FormControl('', Validators.required)
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
    this.UserService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('User updated successfully!');
         this.router.navigateByUrl('User/index');
    })
  }
  
}
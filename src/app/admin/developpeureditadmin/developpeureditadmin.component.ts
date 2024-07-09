


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeureditadmin',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditadmin.component.html',
  styleUrl: './developpeureditadmin.component.css'
})
export class DeveloppeureditadminComponent {
  
  
  id!: number;
  username!: number;
  password!: number;
  email!: number;
  role!: number;
  permissions!: number;
  admin!: Admin;
  form!: FormGroup;


      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public AdminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['AdminId'];
    this.AdminService.find(this.id).subscribe((data: Admin)=>{
      this.admin = data;
    }); 
        
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      username: new FormControl('', Validators.required) ,
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required) ,
      role: new FormControl('', Validators.required) ,
      permissions: new FormControl('', Validators.required)
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
    this.AdminService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Admin updated successfully!');
         this.router.navigateByUrl('Admin/index');
    })
  }
  
}
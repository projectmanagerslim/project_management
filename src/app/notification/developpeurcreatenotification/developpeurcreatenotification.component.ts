
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeurcreatenotification',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeurcreatenotification.component.html',
  styleUrl: './developpeurcreatenotification.component.css'
})
export class DeveloppeurcreatenotificationComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public NotificationService: NotificationService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      idnotif: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required) ,
      datecreation: new FormControl('', Validators.required)
    });
  }
/*
  
f html partie html les nom des champs selon ce modele Notification fhemtni ou pas ??
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
    this.NotificationService.create(this.form.value).subscribe((res:any) => {
         console.log('Notification created successfully!');
         this.router.navigateByUrl('Notification/index');
    })
  }
  
}
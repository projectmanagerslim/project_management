


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { NotificationService } from '../notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '../notification';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeureditnotification',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditnotification.component.html',
  styleUrl: './developpeureditnotification.component.css'
})
export class DeveloppeureditnotificationComponent {
  
  idnotif!: number;
  sujet!: string;
  description!: string;
  datecreation!: Date;
  Notification!: Notification;
  form!: FormGroup;

 

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public NotificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.idnotif = this.route.snapshot.params['NotificationId'];
    this.NotificationService.find(this.idnotif).subscribe((data: Notification)=>{
      this.Notification = data;
    }); 
        
    this.form = new FormGroup({
      idnotif: new FormControl('', [Validators.required]),
      sujet: new FormControl('', Validators.required) ,
      description: new FormControl('', Validators.required),
      datecreation: new FormControl('', Validators.required)
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
    this.NotificationService.update(this.idnotif, this.form.value).subscribe((res:any) => {
         console.log('Notification updated successfully!');
         this.router.navigateByUrl('Notification/index');
    })
  }
  
}
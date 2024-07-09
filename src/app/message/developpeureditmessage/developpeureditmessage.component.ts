


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-developpeureditmessage',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './developpeureditmessage.component.html',
  styleUrl: './developpeureditmessage.component.css'
})
export class DeveloppeureditmessageComponent {
  
  idmessage!: number;
  datemidenvoieessage!: Date;
  idreception!: number;
  sujet!: string;
  texte!: string;
  etat!: string;
  datecreationmessage!: Date;
  Message!: Message;
  form!: FormGroup;



      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public MessageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.idmessage = this.route.snapshot.params['MessageId'];
    this.MessageService.find(this.idmessage).subscribe((data: Message)=>{
      this.Message = data;
    }); 
        
    this.form = new FormGroup({
      idmessage: new FormControl('', [Validators.required]),
      idenvoie: new FormControl('', Validators.required) ,
      idreception: new FormControl('', Validators.required),
      sujet: new FormControl('', Validators.required) ,
      texte: new FormControl('', Validators.required) ,
      etat: new FormControl('', Validators.required),
      datecreationmessage: new FormControl('', Validators.required)
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
    this.MessageService.update(this.idmessage, this.form.value).subscribe((res:any) => {
         console.log('Message updated successfully!');
         this.router.navigateByUrl('Message/index');
    })
  }
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-chefdeprojetcreatemessage',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './chefdeprojetcreatemessage.component.html',
  styleUrl: './chefdeprojetcreatemessage.component.css'
})
export class ChefdeprojetcreatemessageComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public MessageService: MessageService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      idenvoie: new FormControl('', [Validators.required]),
      idreception: new FormControl('', [Validators.required]),
      sujet: new FormControl('', Validators.required) ,
      texte: new FormControl('', Validators.required) ,
      etat: new FormControl('', Validators.required) ,
      datecreationmessage: new FormControl('', Validators.required)
    });
  }
/*
 idmessage: string;
    idenvoie: string;
    idreception: string;
    sujet: Date;
    texte: string;
    etat: string;
    datecreationmessage: Date;

f html partie html les nom des champs selon ce modele Message fhemtni ou pas ??
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
    this.MessageService.create(this.form.value).subscribe((res:any) => {
         console.log('Message created successfully!');
         this.router.navigateByUrl('Message/index');
    })
  }
  
}
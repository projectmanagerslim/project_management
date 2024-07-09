import { Component } from '@angular/core';

import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';



@Component({
  selector: 'app-adminmenu',
standalone: true,
imports: [AdminheaderComponent,AdminmenuComponent,AdminfooterComponent,],
  templateUrl: './adminmenu.component.html',
  styleUrl: './adminmenu.component.css'
})
export class AdminmenuComponent {

}

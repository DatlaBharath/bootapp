import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from '../../User';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = new User("","","","","","",0)
  onSubmit(){
    console.log(this.user)
  }
}

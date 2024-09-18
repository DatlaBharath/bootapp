import { Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'forgot', component: ForgotpasswordComponent},
    { path: 'change', component: ChangepasswordComponent},
    { path: '', component: RegisterComponent}
];

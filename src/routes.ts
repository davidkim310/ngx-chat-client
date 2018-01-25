import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';

export const appRoutes: Routes = [
    {path: 'chatroom', component: ChatroomComponent },
    {path: 'signup', component: SignupComponent},
    {path: '', redirectTo: '/chatroom', pathMatch: 'full'}
];

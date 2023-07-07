import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { ConversationsPageComponent } from './conversations/conversations-page/conversations-page.component';

import { ChatComponent } from './chat/chat.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { GeneralNavigationComponent } from './UI/general-navigation/general-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralNavigationComponent,
    children: [
      { path: '', loadChildren:() => import("./home/home.module").then(m => m.HomeModule) },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'chat',
    canActivate: [AuthguardGuard],
    component: ChatComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'conversations/:id', component: ConversationsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

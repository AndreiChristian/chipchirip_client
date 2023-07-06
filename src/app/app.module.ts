import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './users/users.component';
import { ConversationsListComponent } from './conversations/conversations-list/conversations-list.component';
import { ConversationsCardComponent } from './conversations/conversations-card/conversations-card.component';
import { GroupCardComponent } from './group/group-card/group-card.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { ConversationsPageComponent } from './conversations/conversations-page/conversations-page.component';


@NgModule({
  declarations: [AppComponent, NavigationComponent, LoginComponent, SignupComponent, UsersComponent, ConversationsListComponent, ConversationsCardComponent, GroupCardComponent, GroupListComponent, ConversationsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

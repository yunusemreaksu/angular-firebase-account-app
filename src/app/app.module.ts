import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { MembershipFormComponent } from './components/membership-form/membership-form.component';
import { PostComponent } from './containers/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    SignupComponent,
    MembershipFormComponent,
    PostComponent,
    PostFormComponent,
    PostListComponent,
    AuthGuardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthService, AuthGuardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

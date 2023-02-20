import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { LoginComponent } from './containers/login/login.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostComponent } from './containers/post/post.component';
import { SignupComponent } from './containers/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'post',
    component: PostComponent,
    data: { isEdit: false },
    canActivate: [AuthGuardComponent],
  },
  {
    path: 'posts',
    component: PostListComponent,
    canActivate: [AuthGuardComponent],
  },
  {
    path: 'posts/:postId',
    component: PostComponent,
    data: { isEdit: true },
    canActivate: [AuthGuardComponent],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserlistingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-category',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

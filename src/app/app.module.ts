import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserResolveService } from './services/resolve/user-resolve.service';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';

const routes: Routes = [
  // {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
  children: [
    {path: ':id', component: FullUserComponent}
  ]},
  {path: 'posts', loadChildren: ()=> import('./modules/post/post.module').then(m => m.PostModule)}
  ];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

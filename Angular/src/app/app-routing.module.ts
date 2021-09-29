import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByUsernameComponent } from './search-by-username/search-by-username.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
    {path: 'users', component: SearchByUsernameComponent},
    {path: 'users/:Username', component: ListUsersComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
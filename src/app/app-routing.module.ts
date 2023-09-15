import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookComponent } from './page/detail/detail.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { BookListComponent } from './components/book-list/book-list.component';
const routes: Routes = [{
  path:'',component: AdminComponent,children:[
    {path:'book',component:BookListComponent},
    {path:'book/detail/:id',component:DetailBookComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

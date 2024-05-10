import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewItemComponent } from './components/pages/new-item/new-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

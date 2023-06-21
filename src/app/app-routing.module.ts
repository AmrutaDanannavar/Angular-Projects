import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'diary-entry',component:DiaryEntryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

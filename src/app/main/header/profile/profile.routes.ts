import { Routes } from '@angular/router';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileQnaComponent } from './profile-qna/profile-qna.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { ProfileComponent } from './profile.component';


export const profileRoutes: Routes = [
  {path: '', component: ProfileComponent, children: [
    {path: '', redirectTo: 'history', pathMatch: 'full'},
    {path: 'edit', component: ProfileEditComponent},
    {path: 'qna', component: ProfileQnaComponent},
    {path: 'history', component: ProfileHistoryComponent},
  ]}
];

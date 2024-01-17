import { Routes } from '@angular/router';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileQnaComponent } from './profile-qna/profile-qna.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';


export const profileRoutes: Routes = [
  { path : '', redirectTo: 'history', pathMatch:'full' },
  { path : 'edit', component : ProfileEditComponent },
  { path : 'qna', component : ProfileQnaComponent },
  { path : 'history', component : ProfileHistoryComponent },
];

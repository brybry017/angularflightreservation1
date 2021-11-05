import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';

const routes: Routes = [
  { path: 'StartCheckin', component: StartcheckinComponent },
  { path: 'Checkin/:id', component:  CheckinComponent},
  { path: 'Confirm', component:  ConfirmcheckinComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

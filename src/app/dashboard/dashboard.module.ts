import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../services/auth-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        data: {
          flags: ['a', 'b']
        }
      }
    ])
  ]
})
export class DashboardModule {}

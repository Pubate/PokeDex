import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeadComponent } from './dead/dead.component';
import { RecoveredComponent } from './recovered/recovered.component';
import { HospitalizedComponent } from './hospitalized/hospitalized.component';
import { CasesComponent } from './cases/cases.component';

@NgModule({
  declarations: [
    CasesComponent,
    DeadComponent,
    RecoveredComponent,
    HospitalizedComponent,
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ngzorro.module';
import { FeatureAntRoutes } from './feature-ant.routing';
import { WelcomeAntComponent } from './welcome/welcome.component';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  imports: [
    CommonModule,
    FeatureAntRoutes,
    NgZorroModule
  ],
  declarations: [WelcomeAntComponent, DataTableComponent],
})
export class FeatureAntModule { }


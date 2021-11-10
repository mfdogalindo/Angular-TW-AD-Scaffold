import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ngzorro.module';
import { FeatureAntRoutes } from './feature-ant.routing';
import { WelcomeAntComponent } from './welcome/welcome.component';


@NgModule({
  imports: [
    CommonModule,
    FeatureAntRoutes,
    NgZorroModule
  ],
  declarations: [WelcomeAntComponent],
})
export class FeatureAntModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-tailwind.routing';
import { SharedModule } from '@shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [WelcomeComponent, HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
})
export class FeatureTailwindModule {}

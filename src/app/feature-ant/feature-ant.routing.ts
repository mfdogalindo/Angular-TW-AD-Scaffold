import { Routes, RouterModule } from '@angular/router';
import { WelcomeAntComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'demo',
    component: WelcomeAntComponent,   
  },
];

export const FeatureAntRoutes = RouterModule.forChild(routes);

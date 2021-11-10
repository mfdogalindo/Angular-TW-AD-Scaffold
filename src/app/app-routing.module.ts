import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tailwind', pathMatch: 'full' },
  {
    path: 'tailwind',
    loadChildren: () =>
      import('./feature-tailwind/feature-tailwind.module').then((i) => i.FeatureTailwindModule),
  },
  {
    path: 'ant',
    loadChildren: () =>
      import('./feature-ant/feature-ant.module').then((i) => i.FeatureAntModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

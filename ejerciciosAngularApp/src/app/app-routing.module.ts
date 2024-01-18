import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exercises',
    loadChildren: () =>
      import('./exercises/exercises.module').then((m) => m.ExercisesModule),
  },
  {
    path: '',
    redirectTo: 'exercises',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'exercises',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

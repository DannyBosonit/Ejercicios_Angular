import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { Exercise1PageComponent } from './pages/exercise1-page/exercise1-page.component';
import { Exercise2PageComponent } from './pages/exercise2-page/exercise2-page.component';
import { Exercise3PageComponent } from './pages/exercise3-page/exercise3-page.component';
import { Exercise4PageComponent } from './pages/exercise4-page/exercise4-page.component';
import { Exercise5PageComponent } from './pages/exercise5-page/exercise5-page.component';
import { Exercise6PageComponent } from './pages/exercise6-page/exercise6-page.component';
import { Exercise7PageComponent } from './pages/exercise7-page/exercise7-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'exercise_1',
        component: Exercise1PageComponent,
      },
      {
        path: 'exercise_2',
        component: Exercise2PageComponent,
      },
      {
        path: 'exercise_3',
        component: Exercise3PageComponent,
      },
      {
        path: 'exercise_4',
        component: Exercise4PageComponent,
      },
      {
        path: 'exercise_5',
        component: Exercise5PageComponent,
      },
      {
        path: 'exercise_6',
        component: Exercise6PageComponent,
      },
      {
        path: 'exercise_7',
        component: Exercise7PageComponent,
      },
      {
        path: '**',
        redirectTo: 'exercise_1',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { Exercise1PageComponent } from './pages/exercise1-page/exercise1-page.component';
import { Exercise2PageComponent } from './pages/exercise2-page/exercise2-page.component';
import { Exercise3PageComponent } from './pages/exercise3-page/exercise3-page.component';
import { Exercise4PageComponent } from './pages/exercise4-page/exercise4-page.component';
import { Exercise5PageComponent } from './pages/exercise5-page/exercise5-page.component';
import { Exercise6PageComponent } from './pages/exercise6-page/exercise6-page.component';
import { Exercise7PageComponent } from './pages/exercise7-page/exercise7-page.component';
import { Exercise2ChildComponent } from './components/exercise2-child/exercise2-child.component';
import { Exercise3FormComponent } from './components/exercise3-form/exercise3-form.component';
import { Exercise3TableComponent } from './components/exercise3-table/exercise3-table.component';

import { BlankSpacePipe } from './pipes/blank-space.pipe';

@NgModule({
  declarations: [
    LayoutPageComponent,
    Exercise1PageComponent,
    Exercise2PageComponent,
    Exercise3PageComponent,
    Exercise4PageComponent,
    Exercise5PageComponent,
    Exercise6PageComponent,
    Exercise7PageComponent,
    Exercise2ChildComponent,
    Exercise3FormComponent,
    Exercise3TableComponent,

    // Pipes
    BlankSpacePipe,
  ],
  imports: [CommonModule, ExercisesRoutingModule, ReactiveFormsModule],
})
export class ExercisesModule {}

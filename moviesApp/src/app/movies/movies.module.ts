import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../material/material.module';

import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { PosterGridComponent } from './components/poster-grid/poster-grid.component';

@NgModule({
  declarations: [
    MoviePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    SliderComponent,
    PosterGridComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule],
})
export class MoviesModule {}

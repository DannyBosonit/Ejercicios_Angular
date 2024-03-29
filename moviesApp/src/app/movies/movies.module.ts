import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { PosterGridComponent } from './components/poster-grid/poster-grid.component';
import { CastComponent } from './components/cast/cast.component';

import { PosterPipe } from './pipes/poster.pipe';

@NgModule({
  declarations: [
    MoviePageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    SliderComponent,
    PosterGridComponent,
    CastComponent,
    //Pipes

    PosterPipe,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule, NgbRatingModule],
})
export class MoviesModule {}

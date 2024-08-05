import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { PremieresComponent } from './sections/premieres/premieres.component';
import { SearchComponent } from './sections/search/search.component';
import { PopularComponent } from './sections/popular/popular.component';
import { ViewComponent } from './sections/view/view.component';
import { ShowService } from './services/show.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'premieres', component: PremieresComponent, resolve: { shows: ShowService.getPremieres } },
  { path: 'search', component: SearchComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'popular', component: PopularComponent, resolve: { shows: ShowService.getPopular } },
  { path: 'view/:id', component: ViewComponent, resolve: { show: ShowService.get } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/home/components/main/main.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'tictoc',
        loadComponent: () =>
          import('./components/tictoc/tictoc.component').then(
            (m) => m.TictocComponent
          ),
      },
      {
        path: 'picker',
        loadComponent: () =>
          import('./components/picker/picker.component').then(
            (m) => m.PickerComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];

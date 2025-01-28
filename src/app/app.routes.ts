import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/home/main/main.component';

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
    ],
  },

  { path: '**', redirectTo: '' },
];

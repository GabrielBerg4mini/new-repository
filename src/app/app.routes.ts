import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
      },
      {
        path: 'resume',
        loadComponent: () => import('./features/resume/pages/resume/resume').then((m) => m.Resume),
      },
    ],
  },
];

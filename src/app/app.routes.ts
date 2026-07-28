import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'mostrar',
    pathMatch: 'full',
  },
  {
    path: 'formulario',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
  {
    path: 'mostrar',
    loadComponent: () => import('./pages/mostrar/mostrar.page').then( m => m.MostrarPage)
  },
  {
    path: 'edit-product-modal',
    loadComponent: () => import('./pages/edit-product-modal/edit-product-modal.page').then( m => m.EditProductModalPage)
  },
];

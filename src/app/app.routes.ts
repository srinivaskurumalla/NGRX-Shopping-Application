import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./pages/home/home.component')
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path:'counter',
    loadComponent:() => import('./counter/counter.component').then(m => m.CounterComponent as Type<unknown>)
  },
  {
    path:'products',
    loadComponent:() => import('./products/products.component').then(m => m.ProductsComponent)
  },
  {
    path:'cart',
    loadComponent:() => import('./cart/cart.component').then(m => m.CartComponent)
  },
];

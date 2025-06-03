import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'galeria', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
    { path: 'sobre-mi', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'contacto', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
    { path: 'calendario', loadComponent: () => import('./pages/calendar/calendar').then(m => m.Calendar) },

];

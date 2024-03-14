import { Routes } from '@angular/router';
import { PostDetailsComponent } from './features/post-details/container/post-details.component';
import { PostsComponent } from './features/posts/container/posts.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        loadComponent: () => PostsComponent,
      },
      {
        path: ':id/:slug',
        loadComponent: () => PostDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
];

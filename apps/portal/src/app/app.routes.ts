import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () =>
      import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
  },
  {
    path: 'characters',
    pathMatch: 'full',
    //TODO: Add AuthGuard and ListResolver
    loadComponent: () =>
      import('@rm-monorepo/characters-list-shell').then(
        m => m.CharactersListShell,
      ),
  },
  {
    path: 'characters/:id',
    pathMatch: 'full',
    //TODO: Add AuthGuard and DetailResolver
    loadComponent: () =>
      import('@rm-monorepo/character-detail-shell').then(
        m => m.CharacterDetailShell,
      ),
  },
  {
    path: '**',
    //TODO: Add a 404 Not Found Component
    loadComponent: () => import('@rm-monorepo/shared-ui').then(m => m.SharedUi),
  },
];

import { Route } from '@angular/router';
import { AppAuthRoutes, AppRoutes } from '@rm-monorepo/shared-util';

export const appRoutes: Route[] = [
  {
    path: AppRoutes.ROOT,
    pathMatch: 'full',
    redirectTo: AppRoutes.CHARACTERS,
  },
  {
    path: AppRoutes.AUTH,
    children: [
      {
        path: AppAuthRoutes.LOGIN,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
      {
        path: AppAuthRoutes.REGISTER,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
      {
        path: AppAuthRoutes.RESET_PASSWORD,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
    ],
  },
  {
    path: AppRoutes.CHARACTERS,
    pathMatch: 'full',
    //TODO: Add AuthGuard and ListResolver
    loadComponent: () =>
      import('@rm-monorepo/characters-list-shell').then(
        m => m.CharactersListShell,
      ),
  },
  {
    path: AppRoutes.CHARACTER_DETAIL,
    pathMatch: 'full',
    //TODO: Add AuthGuard and DetailResolver
    loadComponent: () =>
      import('@rm-monorepo/character-detail-shell').then(
        m => m.CharacterDetailShell,
      ),
  },
  {
    path: AppRoutes.NOT_FOUND,
    //TODO: Add a 404 Not Found Component
    loadComponent: () => import('@rm-monorepo/shared-ui').then(m => m.SharedUi),
  },
];

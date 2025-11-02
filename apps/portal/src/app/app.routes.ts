import { Route } from '@angular/router';
import { AppAuthRoutes, AppRoutes } from '@rm-monorepo/shared-util';

export const appRoutes: Route[] = [
  {
    path: AppRoutes.Root,
    pathMatch: 'full',
    redirectTo: AppRoutes.Characters,
  },
  {
    path: AppRoutes.Auth,
    children: [
      {
        path: AppAuthRoutes.Login,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
      {
        path: AppAuthRoutes.Register,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
      {
        path: AppAuthRoutes.ResetPassword,
        loadComponent: () =>
          import('@rm-monorepo/auth-shell').then(m => m.AuthShell),
      },
    ],
  },
  {
    path: AppRoutes.Characters,
    pathMatch: 'full',
    //TODO: Add AuthGuard and ListResolver
    loadComponent: () =>
      import('@rm-monorepo/characters-list-shell').then(
        m => m.CharactersListShell,
      ),
  },
  {
    path: AppRoutes.CharacterDetail,
    pathMatch: 'full',
    //TODO: Add AuthGuard and DetailResolver
    loadComponent: () =>
      import('@rm-monorepo/character-detail-shell').then(
        m => m.CharacterDetailShell,
      ),
  },
  {
    path: AppRoutes.NotFound,
    //TODO: Add a 404 Not Found Component
    loadComponent: () => import('@rm-monorepo/shared-ui').then(m => m.SharedUi),
  },
];

import { RenderMode, ServerRoute } from '@angular/ssr';
import { AppRoutes } from '@rm-monorepo/shared-util';

export const serverRoutes: ServerRoute[] = [
  {
    path: AppRoutes.NotFound,
    renderMode: RenderMode.Prerender,
  },
  {
    path: AppRoutes.CharacterDetail,
    renderMode: RenderMode.Server,
  },
];

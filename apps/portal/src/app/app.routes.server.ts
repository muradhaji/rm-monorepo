import { RenderMode, ServerRoute } from '@angular/ssr';
import { AppRoutes } from '@rm-monorepo/shared-util';

export const serverRoutes: ServerRoute[] = [
  {
    path: AppRoutes.NOT_FOUND,
    renderMode: RenderMode.Prerender,
  },
  {
    path: AppRoutes.CHARACTER_DETAIL,
    renderMode: RenderMode.Server,
  },
];

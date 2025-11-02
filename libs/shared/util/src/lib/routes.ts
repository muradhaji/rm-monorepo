export enum AppRoutes {
  ROOT = '',
  AUTH = 'auth',
  CHARACTERS = 'characters',
  CHARACTER_DETAIL = 'character/:id',
  NOT_FOUND = '**',
}

export enum AppAuthRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET_PASSWORD = 'reset-password',
}

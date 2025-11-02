export enum AppRoutes {
  Root = '',
  Auth = 'auth',
  Characters = 'characters',
  CharacterDetail = 'character/:id',
  NotFound = '**',
}

export enum AppAuthRoutes {
  Login = 'login',
  Register = 'register',
  ResetPassword = 'reset-password',
}

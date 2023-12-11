import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authDirGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('role') === 'Other') return true;

  router.navigate(['/']);

  return false;
};

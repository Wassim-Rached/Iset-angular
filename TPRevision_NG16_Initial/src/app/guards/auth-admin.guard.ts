import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('role') === 'Admin') return true;
  router.navigate(['/']);

  return false;
};

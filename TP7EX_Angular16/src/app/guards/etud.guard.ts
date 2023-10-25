import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servics/auth.service';
import { inject } from '@angular/core';

export const etudGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.isEtudiant()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};

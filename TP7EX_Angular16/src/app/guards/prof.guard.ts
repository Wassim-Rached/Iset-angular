import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servics/auth.service';

export const profGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.isTeacher()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};

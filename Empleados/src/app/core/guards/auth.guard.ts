import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {

  const router = inject(Router);

  if (localStorage.getItem('token')) {
    return true
  }

  router.navigate(['/auth', 'login']);
  return false;
};

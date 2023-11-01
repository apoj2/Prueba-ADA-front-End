import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let algo = localStorage.getItem('idrolusuario')?.toString()
  console.log(algo)
  if (algo == null || algo == '') {
    return true;
  }
  window.location.href='tienda'
  // Si el usuario no tiene el rol admin, redirige a la página de inicio
  return false;
};

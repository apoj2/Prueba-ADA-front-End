import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


export const accesoGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let algo = localStorage.getItem('idrolusuario')?.toString()
  if (algo == "2" || algo == "1") {
    return true;
  }
  // Si el usuario no tiene el rol admin, redirige a la página de inicio
  window.location.href=''
  return false
}

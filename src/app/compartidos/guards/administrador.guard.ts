import { CanActivateFn } from '@angular/router';

export const administradorGuard: CanActivateFn = (route, state) => {
  let algo = localStorage.getItem('idrolusuario')?.toString()
  console.log(algo)
  if (algo != "1") {
    window.location.href='tienda'
    return false;
    
  }
  // Si el usuario no tiene el rol admin, redirige a la página de inicio
  return true;
};

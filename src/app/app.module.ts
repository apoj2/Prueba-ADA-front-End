import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionHomeComponent } from './componentes/administracion/administracion-home/administracion-home.component';
import { AdministracionLayoutComponent } from './compartidos/layouts/administracion-layout/administracion-layout.component';
import { PaginaWebProductosLayoutComponent } from './compartidos/layouts/pagina-web-productos-layout/pagina-web-productos-layout.component';
import { LoginLayoutComponent } from './compartidos/layouts/login-layout/login-layout.component';
import { LoginHomeComponent } from './componentes/login/login-home/login-home.component';
import { PaginaWebProductosHomeComponent } from './componentes/pagina-web-productos/pagina-web-productos-home/pagina-web-productos-home.component';
import { AdministracionEncabezadoComponent } from './compartidos/layouts/encabezados/administracion-encabezado/administracion-encabezado.component';
import { PaginaWebProductosEncabezadoComponent } from './compartidos/layouts/encabezados/pagina-web-productos-encabezado/pagina-web-productos-encabezado.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministracionUsuarioComponent } from './componentes/administracion/administracion-usuario/administracion-usuario.component';
import { AdministracionProductoComponent } from './componentes/administracion/administracion-producto/administracion-producto.component';
import { AdministracionRolusuarioComponent } from './componentes/administracion/administracion-rolusuario/administracion-rolusuario.component';
import { AdministracionFotoComponent } from './componentes/administracion/administracion-foto/administracion-foto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioFotoComponent } from './componentes/administracion/administracion-formularios/formulario-foto/formulario-foto.component';
import { FormularioProductoComponent } from './componentes/administracion/administracion-formularios/formulario-producto/formulario-producto.component';
import { FormularioUsuarioComponent } from './componentes/administracion/administracion-formularios/formulario-usuario/formulario-usuario.component';
import { FormularioRolusuarioComponent } from './componentes/administracion/administracion-formularios/formulario-rolusuario/formulario-rolusuario.component';
import { TablasRolusuarioComponent } from './componentes/administracion/administracion-tablas/tablas-rolusuario/tablas-rolusuario.component';
import { TablasUsuarioComponent } from './componentes/administracion/administracion-tablas/tablas-usuario/tablas-usuario.component';
import { TablasFotoComponent } from './componentes/administracion/administracion-tablas/tablas-foto/tablas-foto.component';
import { TablasProductoComponent } from './componentes/administracion/administracion-tablas/tablas-producto/tablas-producto.component';
import { PaginaWebProductosTiendaComponent } from './componentes/pagina-web-productos/pagina-web-productos-tienda/pagina-web-productos-tienda.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Seccion1Component } from './componentes/pagina-web-productos/pagina-web-productos-home-secciones/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/pagina-web-productos/pagina-web-productos-home-secciones/seccion2/seccion2.component';
import { Seccion3Component } from './componentes/pagina-web-productos/pagina-web-productos-home-secciones/seccion3/seccion3.component';
import { ErrorComponent } from './compartidos/layouts/error/error.component';
import { CrearUsuarioComponent } from './componentes/login/crear-usuario/crear-usuario.component';
import { PaginaWebCarritoComponent } from './componentes/pagina-web-productos/pagina-web-carrito/pagina-web-carrito.component';
import { PaginaProductoComponent } from './componentes/pagina-web-productos/pagina-producto/pagina-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministracionHomeComponent,
    AdministracionLayoutComponent,
    PaginaWebProductosLayoutComponent,
    LoginLayoutComponent,
    LoginHomeComponent,
    PaginaWebProductosHomeComponent,
    AdministracionEncabezadoComponent,
    PaginaWebProductosEncabezadoComponent,
    AdministracionUsuarioComponent,
    AdministracionProductoComponent,
    AdministracionRolusuarioComponent,
    AdministracionFotoComponent,
    FormularioFotoComponent,
    FormularioProductoComponent,
    FormularioUsuarioComponent,
    FormularioRolusuarioComponent,
    TablasRolusuarioComponent,
    TablasUsuarioComponent,
    TablasFotoComponent,
    TablasProductoComponent,
    PaginaWebProductosTiendaComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    ErrorComponent,
    CrearUsuarioComponent,
    PaginaWebCarritoComponent,
    PaginaProductoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

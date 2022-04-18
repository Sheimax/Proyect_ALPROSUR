import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FacturasComponent } from './facturas/facturas.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { VentasComponent } from './ventas/ventas.component';
import { LotesComponent } from './lotes/lotes.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "pedidos", component: PedidosComponent},
  {path: "facturas", component: FacturasComponent},
  {path: "ventas", component: VentasComponent},
  {path: "lotes", component: LotesComponent},
  {path: "productos", component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
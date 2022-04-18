import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { VentasComponent } from './ventas/ventas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LotesComponent } from './lotes/lotes.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    FacturasComponent,
    VentasComponent,
    NavBarComponent,
    LotesComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
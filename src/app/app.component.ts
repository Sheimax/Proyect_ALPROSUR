import { Component } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public pedido: Pedido = this.pedidoEmpty();
  public pedidos: Pedido[] = [];

  onDatos(): void {
    console.log(this.pedido);
    this.pedidos.push(this.pedido);
    this.pedido = this.pedidoEmpty();
  }

  pedidoEmpty(): Pedido {
    return {
      supermercado: "",
      producto: "",
      cantidad: "",
      fecha: ""
    };
  }

  onDelete(i: number): void {
    this.pedidos.splice(i, 1);
  }
}
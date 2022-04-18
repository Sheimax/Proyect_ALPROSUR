import { Component, OnInit } from '@angular/core';
import { Lote, Lotes } from '../interfaces';

@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.css']
})
export class LotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listarLotes(): Lote[] {
    return Lotes
  }
}
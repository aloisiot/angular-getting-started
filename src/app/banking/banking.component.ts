import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html'
})
export class BankingComponent implements OnInit {

  private saldoAtual: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get saldo(): number {
    return this.saldoAtual
  }

  sacar(valor: string) {
    if(this.saldoAtual >= Number(valor)){
      this.saldoAtual -= Number(valor)
    }
  }

  depositar(valor: string) {
    if(Number(valor) > 0) {
      this.saldoAtual += Number(valor)
    }
  }

}

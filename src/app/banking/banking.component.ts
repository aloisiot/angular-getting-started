import { Component, OnInit } from '@angular/core';
import { InvestimentsService } from '../shared/service/investiments.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.less']
})
export class BankingComponent implements OnInit {

  private saldoAtual: number = 0;
  public investiments: any

  constructor(private investimentService: InvestimentsService) { }

  ngOnInit(): void {
    this.investimentService
      .listAll()
      .subscribe(res => this.investiments = res)
  }

  get saldo(): number {
    return this.saldoAtual
  }

  sacar(valor: string) {
    const valorSaque = Number(valor)
    if(this.saldoAtual >= valorSaque && valorSaque > 0){
      this.saldoAtual -= valorSaque
    }
  }

  depositar(valor: string) {
    const valorDeposito = Number(valor)
    if(valorDeposito > 0) {
      this.saldoAtual += valorDeposito
    }
  }
}

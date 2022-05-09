import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(UNITARIO) get saldo', () => {
    expect(component.saldo).toEqual(0)
  });

  it('(UNITARIO) depositar', () => {
    component.depositar("10")
    expect(component.saldo).toEqual(10)
  });

  it('(UNITARIO) quando sacar valor negativo o saldo continua o mesmo', () => {
    const sandoInicial = component.saldo
    component.sacar("-10")
    expect(component.saldo).toEqual(sandoInicial)
  });

  it('Transacoes em tela', () => {
    const el = fixture.debugElement.nativeElement
    const saldoEmTela = el.querySelector("#saldo")

    el.querySelector('#valor-transacao').value = '10'
    el.querySelector('#btn-depositar').click()
    
    fixture.detectChanges()
    expect(saldoEmTela.textContent).toEqual('10')

    
    el.querySelector('#valor-transacao').value = '5'
    el.querySelector('#btn-sacar').click()

    fixture.detectChanges()
    expect(saldoEmTela.textContent).toEqual('5')
  });

});

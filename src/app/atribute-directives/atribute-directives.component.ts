import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute-directives',
  templateUrl: './atribute-directives.component.html',
  styleUrls: ['./atribute-directives.component.less']
})
export class AtributeDirectivesComponent implements OnInit {

  @Input()
  state: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}

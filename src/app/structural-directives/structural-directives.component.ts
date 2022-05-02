import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.less']
})
export class StructuralDirectivesComponent {

  date: Date = new Date()

  @Input()
  condition: boolean = true

  nameList: string[] = []

  name: string = ""

  constructor() { }

  addNameOnList(): void {
    if(!this.nameList.includes(this.name)){
      this.nameList.push(this.name)
    }
  }

  removeNameOfList(id: number): void {
    this.nameList.splice(id, 1)
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.less']
})
export class OutputComponent implements OnInit {

  persons = [
    {name: "John", id: 1},
    {name: "Mary", id: 2}
  ]

  @Output()
  onSelectedPerson = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitSelectedPerson(id: number){
    this.onSelectedPerson.emit(this.persons.find(person => person.id === id))
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dara-binding',
  templateUrl: './dara-binding.component.html',
  styleUrls: ['./dara-binding.component.less']
})
export class DaraBindingComponent implements OnInit {
  
  name: string = "João"

  age: number = 28

  constructor() { }

  ngOnInit(): void {
  }

}

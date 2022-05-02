import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dara-binding',
  templateUrl: './dara-binding.component.html',
  styleUrls: ['./dara-binding.component.less']
})
export class DaraBindingComponent implements OnInit {
  
  name: string = ""

  age: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}

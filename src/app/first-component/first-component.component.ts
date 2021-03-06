import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html'
})
export class FirstComponentComponent implements OnInit {

  count: number = 0
  condition: boolean = true
  titleIsVisible: boolean = true

  togglerIsVisible(): void {
    this.titleIsVisible = !this.titleIsVisible
  }

  incrementar(): void {
    console.log(this.count)
    this.count++
    console.log(this.count)
  }

  log(data: any) {
    console.log(data)
  }

  ngOnInit(): void {
    setInterval(() => this.condition = !this.condition, 1000)
    // console.log("ngOnInit")
  }

}

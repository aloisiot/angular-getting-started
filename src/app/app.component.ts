import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
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
  
  ngDoCheck(): void {
    // console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit")
  }
  
  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked")
  }
  
  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked")
  }
}

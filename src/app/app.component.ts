import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  count: number = 0

  titleIsVisible: boolean = true

  togglerIsVisible() {
    this.titleIsVisible = !this.titleIsVisible
  }

  incrementar(): void {
    this.count += 1
  }

  ngOnInit(): void {
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

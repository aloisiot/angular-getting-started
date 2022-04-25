import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  title: string = "initial title"
  
  constructor() { }

  ngOnInit(): void {
    console.log("componente titulo inicializado")
  }

  ngOnChanges(): void {
    console.log(this.title)
  }

  ngOnDestroy(): void {
      console.log("componente titulo destruido")
  }

}

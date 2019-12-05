import { Component, ViewChild, OnInit } from '@angular/core';
import {MatSelect} from '@angular/material/select';
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @ViewChild('customSelect', {static: true}) customSelect: MatSelect;
  options = ["test 1", "test 2", "test 3"]
  ngOnInit(){
    console.log(this.customSelect);
  }
}

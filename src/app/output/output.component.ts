import { Component, Input, OnInit } from '@angular/core';
import { InputService } from '../input.service';


export interface User {
  name: string;
  address: string;
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() user: User

  constructor(private inputservice: InputService) { }

  ngOnInit() {
    console.log('this.users inside o/p', this.user);
  }

}

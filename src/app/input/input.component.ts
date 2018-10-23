import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputService } from '../input.service';

export interface User {
  name: string;
  address: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  user: User;
  users: User[];

  constructor(private inputservice: InputService) { }

  ngOnInit() {
    this.user = this.user ? this.user : <User>{}
  }

  onSubmit(k: NgForm) {
    this.inputservice.addUser(this.user)
    this.user = <User>{}
    this.users = this.inputservice.fetchUserData()
  }

  // private isShow: Boolean = true;
  // onToggle() {
  //   this.isShow = this.isShow ? false : true;
  // }

}

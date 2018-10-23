import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  userData: any;
  userList:any[] = [];

  addUser(userData) {
    this.userData = userData;
    this.userList.push(userData)
    console.log('this.userList',this.userList);
    
  }

  fetchUserData(){
    return this.userList
  }
  constructor() { }
}

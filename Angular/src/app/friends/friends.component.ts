import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor() {
    //sending friend request
    //this.userService.getUserbyId(element.userId).subscribe(userdata => { element.user - userdata})
   
  //approve deny friend request
  //this.userService.getUserbyId(element.userId)
  //.subscribe(userdata => { element.user - userdata})
  }

  ngOnInit(): void {
  }
//sending friend request
  submitFriendRequest(d: any){
    console.log(`Data: ${d}`);
    console.log(localStorage.getItem('id'));
    const o = {
      friend1_id: d,
      friend2_id: localStorage.getItem('id')
    }
    //this.friendservice.saveFriendship;
  }
}

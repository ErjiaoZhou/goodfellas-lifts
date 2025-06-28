import {Component} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users = DUMMY_USERS;
  selectedUser= this.users[randomIndex];

  get imgPath(){
    return this.selectedUser.avatar
  }

  selectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = this.users[randomIndex];
  }
}

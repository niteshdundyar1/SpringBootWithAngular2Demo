import { Component } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html'
})
export class UserComponent {

  user : User;
  users: User[];
  public isGet = false;
  public isEdited = false;

  userModel =new User(0,'',0,0);
  updateUserModel=new User(0,'',0,0);

  constructor(
   private userService: UserService ) { }

  addUser(): void {
      this.userService.createUser(this.userModel);
      this.userModel =new User(0,'',0,0);
      this.getUsers();
  }

 
  updateUser(user) {
    this.userService.updateUser(this.updateUserModel).subscribe(
       data => {
         this.getUsers();
         this.updateUserModel =new User(0,'',0,0);
         this.isEdited=false;
         return true;
       },
       error => {
         console.error("Error updating user!");
       }
    );
  }

  editUser(editUser){
  console.log(editUser);
    this.updateUserModel=editUser;
    this.isEdited=true;
  }

  getUsers(): void {
    this.isGet = true;
    this.userService.getUsers().then(users => {this.users = users; console.log(users)});
  }

  deleteUser(id: string): void {
  if (confirm("Are you sure you want to delete " + id + "?")) {
      this.userService.deleteUser(id);
      this.getUsers();
    }
  }
    

/**
  ngOnInit(): void {
    this.getUsers();
  }
  */
}

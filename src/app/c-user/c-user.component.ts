import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-c-user',
  templateUrl: './c-user.component.html',
  styleUrls: ['./c-user.component.css']
})
export class CUserComponent implements OnInit {
  user: any;
  username: any;
  
  constructor(private sService: SearchService) {
    this.sService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
  

  searchUser() {
    this.sService.newUsername(this.username);

    this.sService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
  }

}

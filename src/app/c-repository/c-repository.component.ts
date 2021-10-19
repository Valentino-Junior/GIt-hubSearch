import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-c-repository',
  templateUrl: './c-repository.component.html',
  styleUrls: ['./c-repository.component.css']
})
export class CRepositoryComponent implements OnInit {

  reposit: any;
  username: any;

  constructor(private sService: SearchService) {
    this.sService.getRepos().subscribe(repos => {
      this.reposit = repos;
      console.log(this.reposit);
    });
  }
  

  searchRepo() {
    this.sService.newUsername(this.username);
    this.sService.getRepos().subscribe(repos => {
      this.reposit = repos;
      console.log(this.reposit);
    });
  }

  

  ngOnInit(): void {
  }

}

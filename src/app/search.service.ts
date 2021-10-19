import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';


Users: User;
Repo: Repository;
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private username = "valentine-ochieng";
  private client_id = "87c09bd30ffdfb0c197f";
  private client_secret = "0d47157b2e665bfc71d6f6ebdbe7785872c1002a";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}

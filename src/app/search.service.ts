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

  private username = "string";
  private clientId = "87c09bd30ffdfb0c197f";
  private clientSecret = "0d47157b2e665bfc71d6f6ebdbe7785872c1002a";

  constructor(private http: HttpClient) {
    console.log("Github service started");
    this.username = "valentine-ochieng";
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.clientId +
      "&client_secret=" +
      this.clientSecret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.clientId +
      "&client_secret=" +
      this.clientSecret
    );
  }
  newUsername(username: any) {
    this.username = username;
  }
}

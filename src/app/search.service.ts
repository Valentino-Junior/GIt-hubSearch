import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';

User:User;
Repo:Repository;
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) {

   }
}

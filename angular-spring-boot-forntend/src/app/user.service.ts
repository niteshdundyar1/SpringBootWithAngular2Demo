import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {                                                                                                      

  private usersUrl = '/api/user/';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http){
  }

    createUser(u) {
        this.http.post('/api/user/', u).subscribe(
        data => console.log('Received:' + data),
        err => console.log(err),
        () => console.log('Call Complete')
      );   
    }

    updateUser(u) {
        return this.http.put('/api/user/' + u.id, u).map((res: Response) => res.json());
    }

    getUsers(): Promise<User[]> {
      return this.http.get(this.usersUrl)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
    }

    deleteUser(id:string): Promise<User[]> {
      return this.http.delete(`${this.usersUrl}${id}`)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
    }

  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    
}


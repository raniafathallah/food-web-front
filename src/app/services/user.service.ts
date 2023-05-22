import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

// import { USER_URL} from '../constraints/urls';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url: string = 'http://localhost:7000/api/users';
  local_User: any;

  constructor(private http: HttpClient) { }

  registerUser(newUser: User): void {
    this.http.post(`${environment.USER_URL}`, newUser)
      .subscribe((resultData: any) => {
        console.log("user register" + resultData);
       // sessionStorage.setItem('user', JSON.stringify(resultData));
        sessionStorage.setItem('role', JSON.stringify(resultData.isAdmin));
        sessionStorage.setItem('userName', resultData.name);
        sessionStorage.setItem('userId', resultData._id);
        sessionStorage.setItem('token', "Bearer " + resultData.token);
        sessionStorage.setItem('login', 'true');

      });
  }

  loginUser(newUser: { "email": string, "password": string }): void {
    this.http.post(`${environment.USER_URL}` + "/login", newUser)
      .subscribe((resultData: any) => {
        console.log("user register" + resultData);
        sessionStorage.removeItem('role'); sessionStorage.removeItem('login');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('token');

        sessionStorage.setItem('role', JSON.stringify(resultData.isAdmin));
        sessionStorage.setItem('userName',resultData.name);
        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('userId', resultData._id);
        sessionStorage.setItem('token', "Bearer " + resultData.token);
      });
  }

}

import { Injectable } from "@angular/core";
import { UserModel } from "../model/user.model";

@Injectable({
  providedIn :'root'
})

export class UserService {

  user! : UserModel;

  setUser(email:string){
    sessionStorage.setItem('user', email); //창 닫으면 없어짐
/*     localStorage.setItem('user',email); */
    this.user = {
      email
    }
  };

  hasUser() : boolean {
    return this.user?.email ? true : false;
  }
}

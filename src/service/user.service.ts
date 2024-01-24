import { Injectable } from "@angular/core";
import { UserModel } from "../model/user.model";

@Injectable({
  providedIn :'root'
})

export class UserService {

  user! : UserModel | undefined;

  setUser(email:string, password:string){
    //sessionStorage.setItem(email); //창 닫으면 없어짐
/*     localStorage.setItem('user',email); */
    this.user = {
      email,password
    }
  };

  isLoggedin() : boolean {
    return this.user?.email ? true : false;
  }

  logout() {
    this.user = undefined;
  }
}

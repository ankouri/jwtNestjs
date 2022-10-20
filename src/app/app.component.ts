import { Component } from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private srv: LoginService){}

  login(email: string, password: string){
    const body = new Login(email, password);
    this.srv.login(body).subscribe( res =>{
      console.log(res);
    })
  }
}

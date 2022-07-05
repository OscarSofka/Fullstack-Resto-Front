import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = {
    email:'',
    password: ''
  }

  constructor(private authSevice: AuthService){

  }
  title = 'CarGame';

    
  registrar(){
    console.log(this.usuario)
    const{email,password} = this.usuario;
    this.authSevice.register(email,password).then(res=>{
      console.log("registro  ejecutado",res);
    });
  }
  ingresar(){
    console.log(this.usuario)
    const{email,password} = this.usuario;
    this.authSevice.login(email,password).then(res=>{
      console.log("login  ejecutado",res);
    });
  }
  ingresarConGoogle(){
    console.log(this.usuario)
    const{email,password} = this.usuario;
    this.authSevice.loginGoogle(email,password).then(res=>{
      console.log("registro  ejecutado",res);
    });
  }
 
  logout(){
    this.authSevice.logOut();
  }
}

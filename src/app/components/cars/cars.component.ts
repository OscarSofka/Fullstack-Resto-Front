import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { WebsocketserviceService } from 'src/app/services/webSocket/websocketservice.service';
import { HttpClient } from '@angular/common/http';
import { DataPassService } from 'src/app/services/data-pass.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  constructor(private webSocketService: WebsocketserviceService,
              private http: HttpClient, 
              private dataPass: DataPassService,
              private router: Router){}
  
  jugName1='Jug1';
  jugName2='Jug2';
  jugName3='Jug3';

  position1='';
  position2='';
  position3='';
  
  dist1=0;
  dist2=0;
  dist3=0;
  
  podio1='';
  podio2='';
  podio3='';

  idG =this.idGenerator();

  root1='';
  root2='';
  root3='';

 

  crearJuego(){
    this.webSocketService.post('http://localhost:8080/crearJuego',this.body1)
    .subscribe(respuesta=>{
      console.log(this.idG);
    });
  }

  iniciarJuego(){
    return this.http.post(`http://localhost:8080/iniciarJuego`,this.body2).subscribe(respuesta=>{
      this.obtenerDatosJuegoWs();
    });  
    
  }
  
  body1 = {"kilometros": 3, "juegoId": this.idG, "jugadores":{"001":this.jugName1, "002": this.jugName2, "003":this.jugName3}};
  body2 = {"juegoId":this.idG};

  idGenerator(){
    const hoy = new Date();
    const fecha = hoy.getDate().toString() + hoy.getMonth().toString() + hoy.getFullYear().toString();
    const hora = hoy.getHours().toString() + hoy.getMinutes().toString() + hoy.getSeconds().toString(); 
    const fechaYHora = fecha+hora;
    const juegoId = fechaYHora;
    return juegoId;
    
  }
  podio(idG:string){
    console.log(idG);
    this.router.navigate(['/podio',idG]);
  }
 

  obtenerDatosJuegoWs() {
    this.webSocketService.iniciar(this.idG);
    this.webSocketService.messages.subscribe((msg) => {   

    if(this.root1==''){
      this.root1=msg.aggregateRootId;
    }
    if(this.root2==''){
      if(msg.aggregateRootId != this.root1){
        this.root2=msg.aggregateRootId;
      }
    }
    if(this.root3==''){
      if(msg.aggregateRootId != this.root1 && msg.aggregateRootId != this.root2){
        this.root3=msg.aggregateRootId;
      }
    }
    if(msg.aggregateRootId==this.root1){
      this.dist1 = this.dist1 + msg.distancia;  
    }
    if(msg.aggregateRootId==this.root2){
      this.dist2 = this.dist2 + msg.distancia; 
    }
    if(msg.aggregateRootId==this.root3){
      this.dist3 = this.dist3 + msg.distancia; 
    }
    
    if(this.position1=='' && this.position2=='' && this.position3=='' ){
      if(this.dist1>999){
        if(this.dist2<1000 && this.dist3<1000){
          this.position1='Primero';
        }
      }
      if(this.dist2>999){
        if(this.dist1<1000 && this.dist3<1000){
            this.position2='Primero';
        }
      }
      if(this.dist3>999){
        if(this.dist1<1000 && this.dist2<1000){
            this.position3='Primero';
        }
      }
    }
    if(this.position1=='Primero'){
      if(this.dist2>2999 && this.dist3<3000){
        this.position2='Segundo';
        this.position3='Tercero';
      }
    }
    if(this.position2=='Primero'){
      if(this.dist1>2999 && this.dist3<3000){
        this.position1='Segundo';
        this.position3='Tercero';
      }
    }
    if(this.position3=='Primero'){
      if(this.dist1>2999 && this.dist2<3000){
        this.position1='Segundo';
        this.position2='Tercero';
      }
    }
    if(this.position1=='Primero'){
      if(this.dist2<3000 && this.dist3>2999){
        this.position3='Segundo';
        this.position2='Tercero';
      }
    }
    if(this.position2=='Primero'){
      if(this.dist1<3000 && this.dist3>2999){
        this.position3='Segundo';
        this.position1='Tercero';
      }
    }
    if(this.position3=='Primero'){
      if(this.dist1<3000 && this.dist2>2999){
        this.position2='Segundo';
        this.position1='Tercero';
      }
    }
    

    
    
    
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { WebsocketserviceService } from 'src/app/services/webSocket/websocketservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podio',
  templateUrl: './podio.component.html',
  styleUrls: ['./podio.component.css']
})
export class PodioComponent {

  constructor(private webSocketService: WebsocketserviceService,
              private activateRouted: ActivatedRoute
    ) 
  { 
    this.activateRouted.params.subscribe( params =>{
      console.log(params);
      this.Id=params['idg'];
    });
  }
    Id='';
    Stadistics={};

    result: any=[];

 
  
  resultados() {
    console.log(this.Id);    

    this.webSocketService.get('http://localhost:8080/puntaje/'+this.Id).subscribe(res =>{
         
      this.result = res;
      console.log(this.result);
    })
    
    
  }

}

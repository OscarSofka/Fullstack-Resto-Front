import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const idGen: string ='';
const pod1: string ='';
const pod2: string ='';
const pod3: string ='';


@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  private IdGenerated$ = new BehaviorSubject<string>(idGen);
  private pod3$ = new BehaviorSubject<string>(pod3);
  private pod1$ = new BehaviorSubject<string>(pod1);
  private pod2$ = new BehaviorSubject<string>(pod2);
  
  constructor() { }

  get IdPass$():Observable<string>{
    return this.IdGenerated$.asObservable();
  }
  get pod1e$():Observable<string>{
    return this.pod1$.asObservable();
  }
  get pod2e$():Observable<string>{
    return this.pod2$.asObservable();
  }
  get pod3e$():Observable<string>{
    return this.pod3$.asObservable();
  }
  setId(idGen:string): void{
    this.IdGenerated$.next(idGen);
  }
  setpod1(pod1:string): void{
    this.pod1$.next(pod1);
  }
  setpod2(pod2:string): void{
    this.pod2$.next(pod2);
  }
  setpod3(pod3:string): void{
    this.pod3$.next(pod3);
  }

}

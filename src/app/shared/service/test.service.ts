import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getPropX(onSucess: (resp: any) => void, onError?: (error: any) => void) {
    this.httpClient.get("")
  }
  
}

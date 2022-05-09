import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestimentsService {

  public static URL = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json"

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<any> {
    return this.httpClient
      .get(InvestimentsService.URL)
      .pipe(map(res => res))
  }
}

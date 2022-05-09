import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'

import { InvestimentsService } from './investiments.service';
import { HttpClient } from '@angular/common/http';

const mockList = [
  {
    "name": "Itaú",
    "value": 100
  },
  {
    "name": "Banco do Brasil",
    "value": 100
  },
  {
    "name": "Bradesco",
    "value": 100
  },
  {
    "name": "Nubank",
    "value": 100
  }
]

describe('InvestimentsService', () => {
  let service: InvestimentsService;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(InvestimentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should be list all investiments', (done) => {
    service.listAll().subscribe(res => {
      expect(res.length).toEqual(4);
      done();
    });

    const testReq = httpTestingController.expectOne(InvestimentsService.URL);
    testReq.flush(mockList);
    
    expect(testReq.request.method).toEqual('GET');
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token-service';
import { APIService } from './api-service';

import 'rxjs/add/operator/do';

@Injectable()
export class SessionService extends APIService{

    constructor(
      protected http: HttpClient, 
      protected tokenService: TokenService
    ) 
    { 
      super(http);
    }
  
  
  
  }
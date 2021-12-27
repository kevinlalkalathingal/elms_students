import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdServiceService {

  baseURL: string = "http://localhost:3000";

  constructor(private _http:HttpClient) { }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';

export interface Test {
  title: string;
}

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

 getTest(): Observable<Test> {
  return this.http.get<Test>(BASE_URL);
 }
}

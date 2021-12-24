import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000/user"

  constructor(private http : HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  getUserById(id:number):Observable<any>{
    
    return this.http.get<any>(this.baseUrl+'/'+id)
  }

  createUser(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data)
  }

  updateUser(id:number,data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'/'+id,data)
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'/'+id)
  }


}

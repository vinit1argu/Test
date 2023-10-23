import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';
  private baseUrl = 'http://localhost:3000/people';
  

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/people`);
  }

  // For view the data 
  getDataById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }
  // adding the user details in db
  postData(data: any) {
    return this.http.post<any>(
      this.baseUrl ,
      data
    );
  }

  // Viewing the user details in update form 
  getDataForEdit(id:number):Observable<any>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  // Updating the user details
  updateData(updateData: any,id: number): Observable<any>{
    console.log(updateData);
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    
    return this.http.patch(url, updateData);
  }
}

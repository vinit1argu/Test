import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = 'http://localhost:3000';
  

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/get`);
  }

  // For view the data 
  getDataById(id:string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/get/${id}`);
  }

  // adding the user details in db
  postData(data: any) {
    return this.http.post<any>(
      // this.apiUrl ,
      `${this.apiUrl}/post`,
      data
    );
  }

  // Viewing the user details in update form 
  getDataForEdit(id:string):Observable<any>{
    const url = `${this.apiUrl}/get/${id}`;
    return this.http.get<any>(url);
  }

  // Updating the user details
  updateData(updateData: any,id: string): Observable<any>{
    console.log(updateData);
    const url = `${this.apiUrl}/update/${id}`;
    console.log(url);
    
    return this.http.patch(url, updateData);
  }
}

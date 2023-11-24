import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})

export class ContactenosService{
    private apiUrl = 'http://localhost:9092/api/contactenos';

    constructor(private http: HttpClient) {}
    
    list(): Observable<any>{
        return this.http.get(`${this.apiUrl}`);
    }

    create(contactenos: any): Observable<any> {
        return this.http.post(`${this.apiUrl}`, contactenos);
      }

}
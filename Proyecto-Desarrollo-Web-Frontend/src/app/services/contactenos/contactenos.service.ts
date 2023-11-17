import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})

export class ContactenosService{
    private apiUrl = 'http://localhost:9090/api/contactenos';

    constructor(private http: HttpClient) {}
    
    getContactenosData(): Observable<any>{
        return this.http.get(`${this.apiUrl}`);
    }

    saveContactenosData(contactenos: any): Observable<any> {
        return this.http.post(`${this.apiUrl}`, contactenos);
      }

}
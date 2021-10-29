import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PetList } from '../models/petlist.mode';
import { Pet } from '../models/pet.model';
import { AdoptionList } from '../models/adoption-list.model';
import { Adoption } from '../models/adoption.model';

const baseURL = 'http://localhost:3000/api/pets';
const baseURL2 = 'http://localhost:3000/api/adoptions';
const baseUrl = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets(params?:any): Observable<PetList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("filter",params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new PetList(data);
    }))
  }

  getOne(id :number) :Observable<Pet>{
		return this.http.get(`${baseURL}/${id}`).pipe(map(
			data => { return new Pet(data);}
		));
  }

  getRequests(): Observable<AdoptionList> {
    return this.http.get(baseURL2).pipe(map((data: any) => {
      return new AdoptionList(data);
    }))
  }

  postRequest(a :Adoption):Observable<Adoption>{
		return this.http.post(baseURL2, a).pipe(map(
			data => { return new Adoption(data);}
		));
  }

  deleteRequest(id :number) :Observable<Adoption>{
		return this.http.delete(`${baseURL2}/${id}`).pipe(map(
			data => { return new Adoption(data);}
		));
  }

}

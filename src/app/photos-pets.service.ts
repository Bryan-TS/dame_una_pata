import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ResponseDogApi } from './Interfaces/responseDogApi';

@Injectable({
  providedIn: 'root'
})
export class PhotosPetsService {

  constructor(private http: HttpClient) { }

  getDogPhoto(){

    const baseUrl= 'https://dog.ceo/api/breeds/image/random'

    return this.http.get<ResponseDogApi>(baseUrl);
  }
}

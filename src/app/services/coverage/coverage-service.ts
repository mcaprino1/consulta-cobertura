import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RegionsResponseModel } from 'src/app/models/regions-response.model';
import { CountiesResponseModel } from 'src/app/models/counties-response.model';

const NOT_AVAILABLE_COUNTIES: string[] = ['STGO'];
const API_VERSION = '1.0';
const SERVICE_URL = 'https://testservices.wschilexpress.com/georeference/api/v' + API_VERSION;
const REGIONS_ENDPOINT = '/regions';
const COUNTIES_ENDPOINT = '/coverage-areas';
@Injectable({
    providedIn: 'root',
  })

export class CoverageService {
  constructor(private http: HttpClient){}
  
  obtenerRegiones = () => {
    return new Promise<RegionsResponseModel>((resolve, reject) => {
      let headers = new HttpHeaders();
      
      headers.append('Content-Type', 'application/json; charset=utf-8');
      
      this.http
        .get(SERVICE_URL + REGIONS_ENDPOINT, {headers})
        .subscribe(
          (data: any) => {
            if (data === undefined) {
                reject('ERROR')
            }
            const response = data as RegionsResponseModel;
            resolve(response);
          },
          (error) => {
            reject(error);
          }
      );
    })
  }

  obtenerComunas = (codigoRegion: string) => {
    return new Promise<CountiesResponseModel>((resolve, reject) => {
      let headers = new HttpHeaders();
      let params = new HttpParams();
      
      headers.append('Content-Type', 'application/json; charset=utf-8');
      params.set('RegionCode', codigoRegion);
      params.set('type', '1');

      this.http
        .get(SERVICE_URL + COUNTIES_ENDPOINT, {headers, params})
        .subscribe(
          (data: any) => {
            if (data === undefined) {
                reject('ERROR')
            }
            const response = data as CountiesResponseModel;
            resolve(response);
          },
          (error) => {
            reject(error);
          }
      );

    })
  }

  validarComuna = (codigoComuna: string) => {
    if(codigoComuna in NOT_AVAILABLE_COUNTIES){
      return false;
    }
    return true;
  }
}
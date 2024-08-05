import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private API_KEY = '87de9079e74c828116acce677f6f255b';
  private BASE_URL = 'http://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  private makeRequest(url: string, params: any) {
    let requestUrl = `${this.BASE_URL}/${url}?api_key=${this.API_KEY}`;
    Object.keys(params).forEach(key => {
      requestUrl += `&${key}=${params[key]}`;
    });
    return this.http.get(requestUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError(this.dataServiceError)
    ).toPromise();
  }

  getPremieres() {
    const date = new Date();
    date.setDate(1);
    return this.makeRequest('discover/tv', {
      'first_air_date.gte': moment(date).format('DD-MM-YYYY'),
      append_to_response: 'genres'
    }).then((data: any) => data.results);
  }

  get(id: string) {
    return this.makeRequest(`tv/${id}`, {});
  }

  getCast(id: string) {
    return this.makeRequest(`tv/${id}/credits`, {});
  }

  search(query: string) {
    return this.makeRequest('search/tv', { query }).then((data: any) => data.results);
  }

  getPopular() {
    return this.makeRequest('tv/popular', {}).then((data: any) => data.results);
  }

  private dataServiceError(errorResponse: any) {
    console.error('XHR Failed for ShowService');
    console.error(errorResponse);
    return of(errorResponse);
  }
}

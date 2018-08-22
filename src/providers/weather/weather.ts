import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  url='http://api.openweathermap.org/data/2.5/weather?q=';
  appid='&&appid=704405e008d07e797175c4f6c26f4515';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getweather(city:string){
    return this.http.get(this.url+city+',za'+this.appid);

  }
}

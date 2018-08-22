import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;
  city:string;
  value:string;
  main:string;
  date:number;
  temp:number;
  humidity:number;
  windspeed:number;
  description:string;

  constructor(public navCtrl: NavController, private proviver:WeatherProvider) {

  }

  getWeather(){
    this.proviver.getweather(this.city).subscribe(res=>{
      this.weather=res;
      this.date = this.weather.dt;
      this.main=this.weather.weather[0].main;
      this.description=this.weather.weather[0].description;
      this.windspeed=this.weather.wind.speed;
      this.humidity=this.weather.main.humidity;
      this.temp=this.weather.main.temp;

      console.log('response',res);
    });
  }



}

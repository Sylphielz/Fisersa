import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, } from 'rxjs/operators';

@Injectable()
export class MainService{
	constructor(private _http: HttpClient){}

	private urlStopsByRoute = 'http://mybus-realtime-lb-761922244.us-east-1.elb.amazonaws.com/route/getstations/';
	private urlStopsByAgency = "http://mybus-services-326644806.us-east-1.elb.amazonaws.com/stations/get_stations/34";
	private urlTimes = 'http://mybus-services-326644806.us-east-1.elb.amazonaws.com//route/getarrivaltimesamc/';
	private urlPositions = 'http://mybus-positions-lb-1801632672.us-east-1.elb.amazonaws.com:8128/dueBuses/34';

	
	getStopsByRoute(id){		// all the drivers of the current user
		return this._http.get(this.urlStopsByRoute+id).pipe(map(this.response));
	}

	getAllStops(){
		return this._http.get(this.urlStopsByAgency).pipe(map(this.response));
	}

	getTimes(stopId){
		return this._http.get(this.urlTimes + stopId).pipe(map(this.response));
	}

	getPositions(){
		return this._http.get(this.urlPositions).pipe(map(this.response));
	}

	private response(res){
		return res;
	}
}
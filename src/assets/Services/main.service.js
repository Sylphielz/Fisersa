var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
var MainService = /** @class */ (function () {
    function MainService(_http) {
        this._http = _http;
        this.urlStopsByRoute = 'http://mybus-realtime-lb-761922244.us-east-1.elb.amazonaws.com/route/getstations/';
        this.urlStopsByAgency = "http://mybus-services-326644806.us-east-1.elb.amazonaws.com/stations/get_stations/34";
        this.urlRouteStopId = 'http://mybus-services-326644806.us-east-1.elb.amazonaws.com//route/getarrivaltimesamc/';
        this.urlPositions = "http://mybus-positions-lb-1801632672.us-east-1.elb.amazonaws.com:8128/dueBuses/34";
    }
    MainService.prototype.getStopsByRoute = function (id) {
        return this._http.get(this.urlStopsByRoute + id)
            .map(this.response)
            .catch(this.handleError);
    };
    MainService.prototype.getAllStops = function () {
        return this._http.get(this.urlStopsByAgency)
            .map(this.response)
            .catch(this.handleError);
    };
    MainService.prototype.response = function (res) {
        return res;
    };
    MainService.prototype.handleError = function (error) {
        if (error.status && (error.status === 401 || error.status === 404)) {
            return Observable.of(false);
        }
        else {
            return Observable.throw(error);
        }
    };
    MainService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MainService);
    return MainService;
}());
export { MainService };
//# sourceMappingURL=main.service.js.map
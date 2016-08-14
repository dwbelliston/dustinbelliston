"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('../shared/data.service');
var ClientsComponent = (function () {
    function ClientsComponent(dataService) {
        this.dataService = dataService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.clients = this.dataService.getClients();
    };
    ClientsComponent.prototype.ngAfterContentInit = function () {
    };
    ClientsComponent.prototype.randomTranslate = function () {
        var x, xDir, y, yDir;
        x = Math.random() < 0.5 ? '0%' : '100%';
        y = x === "0%" ? "100%" : Math.random() < 0.5 ? '0%' : '100%';
        xDir = Math.random() < 0.5 ? '-' : '';
        yDir = Math.random() < 0.5 ? '-' : '';
        return "translate(" + (xDir + x) + ", " + (yDir + y) + ")";
    };
    ClientsComponent = __decorate([
        core_1.Component({
            selector: 'clients',
            template: require('./clients.comp.html'),
            styles: [require('./clients.comp.scss'), require('../../styles/main.scss')],
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ClientsComponent);
    return ClientsComponent;
}());
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.comp.js.map
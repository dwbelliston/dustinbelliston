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
exports.CLIENTS = [
    { name: 'clientsuccess', img: 'logo_clientsuccess',
        color: '#22A5DE', url: '', viewMore: 'false',
        content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
    },
    { name: 'simplecitizen', img: 'logo_clientsuccess',
        color: 'red', url: '', viewMore: 'false',
        content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
    },
    { name: 'clientsuccess', img: 'logo_clientsuccess',
        color: 'green', url: '', viewMore: 'false',
        content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
    },
    { name: 'simplecitizen', img: 'logo_clientsuccess',
        color: 'orange', url: '', viewMore: 'false',
        content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
    },
    { name: 'clientsuccess', img: 'logo_clientsuccess',
        color: '#22A5DE', url: '', viewMore: 'false',
        content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
    },
    { name: 'simplecitizen', img: 'logo_clientsuccess',
        color: '#246D5A', url: '', viewMore: 'false',
        content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
    },
    { name: 'clientsuccess', img: 'logo_clientsuccess',
        color: '#22A5DE', url: '', viewMore: 'false',
        content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
    },
    { name: 'simplecitizen', img: 'logo_clientsuccess',
        color: '#246D5A', url: '', viewMore: 'false',
        content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
    },
    { name: 'simplecitizen', img: 'logo_clientsuccess',
        color: '#246D5A', url: '', viewMore: 'false',
        content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
    },
];
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getClients = function () {
        return exports.CLIENTS;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
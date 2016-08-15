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
var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        this.imageSrc = require("../../../assets/" + this.data.img + ".png");
        this.translateStyle = this.randomTranslate();
    };
    CardComponent.prototype.ngAfterContentInit = function () {
    };
    CardComponent.prototype.randomTranslate = function () {
        var x, xDir, y, yDir;
        x = Math.random() < 0.5 ? '0%' : '100%';
        y = x === "0%" ? "100%" : Math.random() < 0.5 ? '0%' : '100%';
        xDir = Math.random() < 0.5 ? '-' : '';
        yDir = Math.random() < 0.5 ? '-' : '';
        return "translate(" + (xDir + x) + ", " + (yDir + y) + ")";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "data", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card',
            template: require('./card.comp.html'),
            styles: [require('../../../styles/main.scss'), require('./card.comp.scss')],
            providers: [],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.comp.js.map
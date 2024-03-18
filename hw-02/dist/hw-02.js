var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var Mercedes = (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(model, year, topColor) {
        var _this = _super.call(this, 'Mercedes', model, year) || this;
        _this.topColor = topColor;
        return _this;
    }
    Mercedes.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year, ", Top Color: ").concat(this.topColor));
    };
    return Mercedes;
}(Car));
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, topSpeed) {
        var _this = _super.call(this, 'BMW', model, year) || this;
        _this.topSpeed = topSpeed;
        return _this;
    }
    BMW.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year, ", Top Speed: ").concat(this.topSpeed));
    };
    return BMW;
}(Car));
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, price) {
        var _this = _super.call(this, 'Audi', model, year) || this;
        _this.price = price;
        return _this;
    }
    Audi.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year, ", Price: ").concat(this.price));
    };
    return Audi;
}(Car));
var mercedes1 = new Mercedes('C-Class', 2020, 'Midnight Blue');
var mercedes2 = new Mercedes('E-Class', 2021, 'Black');
var bmw1 = new BMW('3 Series', 2019, 250);
var bmw2 = new BMW('5 Series', 2020, 300);
var audi1 = new Audi('A4', 2018, 60000);
var audi2 = new Audi('Q5', 2021, 95000);
mercedes1.displayInfo();
mercedes2.displayInfo();
bmw1.displayInfo();
bmw2.displayInfo();
audi1.displayInfo();
audi2.displayInfo();
var Cat = (function () {
    function Cat(name, age, coating) {
        this.name = name;
        this.age = age;
        this.coating = coating;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " is walking"));
    };
    Cat.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food));
    };
    Cat.prototype.sleep = function (hours) {
        console.log("".concat(this.name, " is sleeping for ").concat(hours, " hours. It has such a beautiful ").concat(this.coating));
    };
    return Cat;
}());
var Bird = (function () {
    function Bird(name, age) {
        this.name = name;
        this.age = age;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " is flying"));
    };
    Bird.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food));
    };
    Bird.prototype.sleep = function (hours) {
        console.log("".concat(this.name, " is sleeping for ").concat(hours, " hours"));
    };
    return Bird;
}());
var Fish = (function () {
    function Fish(name, age, coating) {
        this.name = name;
        this.age = age;
        this.coating = coating;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " is swimming"));
    };
    Fish.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food));
    };
    Fish.prototype.sleep = function (hours) {
        console.log("".concat(this.name, " is sleeping for ").concat(hours, " hours"));
    };
    return Fish;
}());
var cat = new Cat('Tom', 5, 'fur');
cat.move();
cat.eat('fish');
cat.sleep(8);
var bird = new Bird('Sparrow', 1);
bird.move();
bird.eat('seeds');
bird.sleep(6);
var fish = new Fish('Goldfish', 2, 'scales');
fish.move();
fish.eat('plankton');
fish.sleep(12);

webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: 'add/:id', component: add_component_1.AddComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  <h1>\n    {{ title }}\n  </h1>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_http) {
        this._http = _http;
        this.title = 'Commerce Manager';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                edit_component_1.EditComponent,
                add_component_1.AddComponent,
                details_component_1.DetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = "#back{\n    padding: 5px;\n    border-radius: 6px;\n}\n\n#delete{\n    padding: 5px;\n    background-color: red;\n    color: white;\n    border-radius: 6px;\n    \n}\n\n.on {\n    visibility: hidden; \n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n<a [routerLink]=\"['/home']\">Home</a>\n  <h3>Details about {{product.name}}: </h3>\n  <h4>Quantity: {{product.quantity}}</h4>\n  <h4>Price: ${{product.price}}</h4>\n  <h4>Product Id: {{product._id}}</h4>\n  <button id=\"back\" [routerLink]=\"['/home']\">Back</button> | <button [ngClass]=\"{'on': switch}\" id=\"delete\" (click)=\"deleteFromService(product._id, product.quantity)\">Delete</button> \n  <p style=\"color: red\" *ngIf='error'>{{error}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.getProductFromService(params['id']); });
        this.product = { name: "", quantity: "", price: "" };
    };
    DetailsComponent.prototype.getProductFromService = function (id) {
        var _this = this;
        var observable = this._http.getOneProduct(id);
        observable.subscribe(function (data) {
            console.log(data['data']);
            _this.product = data['data'];
            if (_this.product.quantity == 0) {
                _this.switch = false;
            }
            else {
                _this.switch = true;
            }
        });
    };
    DetailsComponent.prototype.deleteFromService = function (id, qty) {
        var _this = this;
        if (qty > 0) {
            this.error = 'Cannot Delete until product is sold out';
            return;
        }
        else {
            var observable = this._http.deleteProduct(id);
            observable.subscribe(function (data) {
                console.log("Product no longer offered", data);
                _this._router.navigate(['/home']);
            });
        }
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = "form{\n    margin-bottom: 10px;\n    display: inline-block;\n}\nform, input{\n    text-align: right;\n    margin-bottom: 6px;\n}\n#submit{\n    padding: 5px;\n    background-color: palegreen;\n    border-radius: 6px;\n}\n#reset{\n    padding: 5px;\n    border-radius: 6px;\n\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n<a [routerLink]=\"['/home']\">Home</a>\n  <h3>Update a Product:</h3>\n  <div id=\"form-div\">\n    \n    \n    <form class=\"form\" (submit)='editProductFromService()'>\n      <label for=\"newProduct.name\">Product Name:</label>\n      <input type=\"text\" name=\"newProduct.name\" [(ngModel)]=\"newProduct.name\"><br>\n      <label for=\"newProduct.quantity\">Quantity:</label>\n      <input type=\"text\" name=\"newProduct.quantity\" [(ngModel)]=\"newProduct.quantity\"><br>\n      <label for=\"newProduct.price\">Price:</label>\n      <input type=\"text\" name=\"newProduct.price\" [(ngModel)]=\"newProduct.price\"><br>\n      <input id=\"submit\" type=\"submit\" value=\"Update Product\">\n    </form>\n    <button id=\"reset\" (click)=\"populateEditField(newProduct._id)\">Reset</button>\n  </div>\n  <p style=\"color: red\" *ngIf='error'>{{error.message}}</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.populateEditField(params['id']); });
        this.newProduct = { name: "", quantity: "", price: "" };
    };
    EditComponent.prototype.populateEditField = function (id) {
        var _this = this;
        var observable = this._http.getOneProduct(id);
        observable.subscribe(function (data) {
            if (data['error']) {
                _this.error = data['error'];
            }
            else {
                _this.newProduct = data['data'];
            }
        });
    };
    EditComponent.prototype.editProductFromService = function () {
        var _this = this;
        var observable = this._http.updateProduct(this.newProduct);
        observable.subscribe(function (data) {
            if (data['error']) {
                _this.error = data['error'];
            }
            else {
                console.log('Updated Product', data);
                _this._router.navigate(['/home']);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#authors {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\n#authors td, #authors th {\n    border: 1px solid #ddd;\n    padding: 8px;\n}\n\n#authors tr:nth-child(even){background-color: #f2f2f2;}\n\n#authors tr:hover {background-color: #ddd;}\n\n#authors th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #42aaf4;\n    /* color: white; */\n}\n\nbutton{\n    padding: 5px;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <button [routerLink]=\"['/new']\">Add a Product</button>\n  <table id=\"authors\">\n    <thead>\n      <tr>\n        <th>Product Id:</th>\n        <th>Product Name:</th>\n        <th>Quantity:</th>\n        <th>Price:</th>\n        <th>Actions:</th>\n      </tr>\n    </thead>\n    <tbody *ngFor='let prod of products'>\n      <tr>\n        <td>{{prod._id}}</td>        \n        <td>{{prod.name}}</td>\n        <td>{{prod.quantity}}</td>\n        <td>${{prod.price}}</td>        \n        <td><button [routerLink]=\"[('/details/' + prod._id)]\">Product Details</button> <button [routerLink]=\"[('/edit/' + prod._id)]\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.products = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProductsFromService();
    };
    HomeComponent.prototype.getProductsFromService = function () {
        var _this = this;
        var observable = this._http.getProducts();
        observable.subscribe(function (data) {
            _this.products = data['products'];
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get('/products');
    };
    HttpService.prototype.newProduct = function (product) {
        return this._http.post('/products', product);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete('/products/' + id);
    };
    HttpService.prototype.getOneProduct = function (id) {
        return this._http.get('/products/' + id);
    };
    HttpService.prototype.updateProduct = function (product) {
        return this._http.put('/products/' + product._id, product);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = "form{\n    margin-bottom: 10px;\n    display: inline-block;\n}\nform, input{\n    text-align: right;\n    margin-bottom: 6px;\n}\n#submit{\n    padding: 5px;\n    background-color: paleturquoise;\n    border-radius: 6px;\n}\n#reset{\n    padding: 5px;\n    border-radius: 6px;\n\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n<a [routerLink]=\"['/home']\">Home</a>\n  <h3>Register a Restaurant:</h3>\n  <div id=\"form-div\">\n    \n    \n    <form class=\"form\" (submit)='addProductFromService()'>\n      <label for=\"newProduct.name\">Product Name:</label>\n      <input type=\"text\" name=\"newProduct.name\" required minlength=\"3\" [(ngModel)]=\"newProduct.name\" #name=\"ngModel\"><br>\n      <label for=\"newProduct.quantity\">Quantity:</label>\n      <input type=\"text\" name=\"newProduct.quantity\" [(ngModel)]=\"newProduct.quantity\"><br>\n      <label for=\"newProduct.price\">Price:</label>\n      <input type=\"text\" name=\"newProduct.price\" [(ngModel)]=\"newProduct.price\"><br>\n      <input id=\"submit\" type=\"submit\" value=\"Add Product\">\n    </form>\n    <button id=\"reset\" [routerLink]=\"['/home']\">Cancel</button>\n  </div>\n  <p style=\"color: red\" *ngIf='error'>{{error.message}}</p>\n</div>\n\n{{product.name | json}}"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newProduct = { name: "", quantity: "", price: "" };
    };
    NewComponent.prototype.addProductFromService = function () {
        var _this = this;
        var observable = this._http.newProduct(this.newProduct);
        observable.subscribe(function (data) {
            if (data['error']) {
                console.log('Naw dawg', data['error']);
                _this.error = data['error'];
            }
            else {
                console.log('New Product Added', data);
                _this.newProduct = { name: "", quantity: "", price: "" };
                _this._router.navigate(['/home']);
            }
        });
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
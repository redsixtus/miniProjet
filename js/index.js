"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presentation_1 = require("./presentation");
var service_1 = require("./service");
console.log('** Administration Collegues **');
var service = new service_1.Service();
var presentation = new presentation_1.Presentation(service);
presentation.demarrer();

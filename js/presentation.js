"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var service_1 = require("./service");
var Presentation = /** @class */ (function () {
    function Presentation() {
    }
    Presentation.prototype.demarrer = function () {
        var _this = this;
        console.log("99. Sortie");
        var list = new service_1.Service();
        var choisimoi = "";
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("1. Lister les collegues ou 99. Sortie  ");
        rl.question("", function (input) {
            choisimoi = input;
            rl.close();
            switch (choisimoi) {
                case "1":
                    console.log("Liste des collegues");
                    _this.demarrer();
                    list.listCo().then(function (listCo) {
                        for (var _i = 0, listCo_1 = listCo; _i < listCo_1.length; _i++) {
                            var col = listCo_1[_i];
                            console.log(col.nom);
                            console.log(col.prenom);
                        }
                    });
                    break;
                case "2":
                    console.log("Creer un collegue");
                    _this.demarrer();
                    list.listCo().then(function (listCo) {
                        for (var _i = 0, listCo_2 = listCo; _i < listCo_2.length; _i++) {
                            var col = listCo_2[_i];
                            console.log(col.nom);
                            console.log(col.prenom);
                        }
                    });
                    break;
                case "99":
                    console.log("Au Revoir A la Giscard");
                    break;
                default:
                    console.log("1,2 ou 99 c'est pas compliqué et pourtant !!!");
                    _this.demarrer();
                    break;
            }
        });
    };
    return Presentation;
}());
exports.Presentation = Presentation;

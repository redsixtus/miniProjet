

import{Presentation} from "./presentation";
import {Service} from "./service";

console.log('** Administration Collegues **');
const service = new Service();
const presentation = new Presentation(service);

presentation.demarrer()



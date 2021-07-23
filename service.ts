import fetch from 'node-fetch';
import {promises} from "dns";
import {Collegue} from "./models";

export class Service{

    async listCo():Promise<Collegue[]> {

        const response = await fetch('https://c1.cleverapps.io/collegues');
        const body = await response.json();

        return body;
    }
}
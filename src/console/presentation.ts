import {Service} from "../common/service";
import {create} from "domain";

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
export class Presentation {

    constructor(private service: Service) {

    }


    demarrer() {

        console.log("99. Sortie")
        let list =new Service();
        let choisimoi: string="";


        console.log("1. menu ou 99. Sortie  ");
        rl.question("",( input : string)=>{
        choisimoi=input;

        switch (choisimoi){
            case"1":
                console.log("Liste des collegues");
                this.demarrer();
                list.listCo().then(listCo =>{
                    for (const col of listCo ){
                        console.log(col.nom)
                        console.log(col.prenom)
                    }
                });
                break;
            case"2":
                rl.question("Entre nom de votre collegue : ", (nom:string)=>{
                    rl.question("Entre le prenom : ",async (prenom: string) => {
                        const collegue = await this.service.create({nom,prenom})
                        this.demarrer();
                    })

                })
                break;
            case "99":
                rl.close();
                console.log("Au Revoir A la Giscard");
                break;
            default:
                console.log("1,2 ou 99 c'est pas compliqué et pourtant !!!")
                this.demarrer()
                break;
        }
        })


    }
}
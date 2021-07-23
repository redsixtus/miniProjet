import {Service} from "./service";

export class Presentation {


    demarrer() {

        console.log("99. Sortie")
        let list =new Service();
        let choisimoi: string="";
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout

        });
        console.log("1. Lister les collegues ou 99. Sortie  ");
        rl.question("",( input : string)=>{
        choisimoi=input;
        rl.close();
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
                console.log("Creer un collegue");
                this.demarrer();
                list.listCo().then(listCo =>{
                    for (const col of listCo ){
                        console.log(col.nom)
                        console.log(col.prenom)
                    }
                });
                break;
            case "99":
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
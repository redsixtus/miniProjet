import {Service} from "../common/service";

let btn= document.querySelector('input');
let txt= document.querySelector('p');

btn?.addEventListener('click',()=> {
    new Service().listCo().then(listCo => {
         for (const col of listCo ) {
             if (txt) {
                 txt.innerHTML = (listCo.map(c => c.nom + " " + c.prenom)).join(' ')
             }
         }
    })

})

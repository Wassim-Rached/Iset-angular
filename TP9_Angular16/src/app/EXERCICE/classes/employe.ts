import { Affiliation } from "./affiliation";

export class Employe {
    constructor(
        public id:string,
        public matricule:number,
        public nom:string,
        public affiliation: Affiliation){
        }
}

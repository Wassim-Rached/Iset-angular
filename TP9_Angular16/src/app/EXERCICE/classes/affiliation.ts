import { Departement, Fonction } from "../enum/types";

export class Affiliation {
    constructor(
        public fonction:Fonction,
        public departement:Departement
    ){}
}

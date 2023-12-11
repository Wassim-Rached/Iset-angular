 import { Continent } from "./continent";

export class Pays {
    constructor(
        public id:number,
        public nom:string,
        public capitale: string,
        public drapeau: string,
        public continent: Continent,
        public superficie: number,
        public population: number,
        public royaume: boolean,
        public langues: string[]
    ){    }
}

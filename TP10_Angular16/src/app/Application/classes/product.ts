import { Category } from "../enum/category";

export class Product {
    constructor(
        public id:number ,
        public libelle: string,
        public prix:number,
        public madeIn:string,
        public categorie:Category ,
        public nouveau:boolean,
        public pointsVente: string[]
    ){}

}

import { Accessoire } from "./accessoire";

export class Voiture {
  constructor(
    public id: number,
    public infos: {
      marque: string,
      modele: string,
      immatriculation: string
    },
    public photo:string,
    public puissance: number,
    public dateCirculation: Date,
    public estAutomatique: boolean,
    public listAccessoires: Accessoire[]
  ) { }
}

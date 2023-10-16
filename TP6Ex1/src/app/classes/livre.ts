export class Livre {
  constructor(
    public id: number,
    public titre: string,
    public auteur: string,
    public categorie: string,
    public prix: number,
    public nouveau: boolean
  ) {}
}

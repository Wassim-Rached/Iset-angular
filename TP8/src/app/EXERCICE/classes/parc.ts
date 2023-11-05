export class Parc {
  constructor(
    public id: number,
    public nom: string,
    public photo: string,
    public nbLikes: number,
    public dateOuverture: Date,
    public horaire?: string,
    public lieu?: string
  ) {}
}

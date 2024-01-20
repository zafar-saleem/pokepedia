interface IFast {
  damage: Number;
  name: String;
  type: String;
}

interface ISpecial {
  damage: Number;
  name: String;
  type: String;
}

interface IAttacks {
  fast: IFast[];
  special: ISpecial[];
}

interface IProps {
  classification: String;
  fleeRate: Number;
  id: String;
  image: String;
  isFavorite: Boolean;
  maxCP: Number;
  maxHP: Number;
  name: String;
  resistant: String[];
  weaknesses: String[];
  attacks: IAttacks;
}

interface IEdges {
  edges: IProps[];
}

interface IPokemons {
  pokemons: IEdges;
}

export interface IData {
  data?: IPokemons;
}

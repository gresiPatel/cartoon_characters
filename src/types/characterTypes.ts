interface pageInfoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

type Location = {
  name: string;
  url: string;
};

export interface CharacterType {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'Unknown';
  species: string;
  type: string;
  gender: string;
  image: string;
  location: Location;
  origin: Location;
}

export interface apiResponseType {
  info: pageInfoType;
  results: CharacterType[];
}

export interface CharacterCardProps extends CharacterType {
  onPressCard(): void;
}

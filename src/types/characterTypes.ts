interface pageInfoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}

export interface apiResponseType {
  info: pageInfoType;
  results: CharacterType[];
}

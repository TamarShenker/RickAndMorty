export interface ListPage<CharacterState> {
  info: {
    count: number;
    pages: number;
    next: string;
    previous: string;
  };
  results: CharacterState[];
}

export interface Record {
  id?: number;
}

export interface Team extends Record {
  name: string;
  city?: string | null;
  description?: string | null;
  matches?: Match[];
}

export interface Match extends Record {
  team1?: number | null; // using json server, relationship won't work so it returns a string instead of a "Team" object
  team1score: number;
  team2?: number | null; // using json server, relationship won't work so it returns a string instead of a "Team" object
  team2score: number;
  stadium: string;
}

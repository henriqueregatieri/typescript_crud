export interface Record {
  id: number;
}

export interface Team extends Record {
  name: string;
  city?: string | null;
  description?: string | null;
}

export interface Match extends Record {
  team1: Team;
  team1score: number;
  team2: Team;
  team2score: number;
  stadium?: string | null;
}

export interface Record {
  id: number;
}

export interface Team extends Record {
  name: string;
  city?: string | null;
  description?: string | null;
  matches: Match[];
}

export interface Match extends Record {
  team1id: Team;
  team1score: number;
  team2id: Team;
  team2score: number;
  stadium?: string | null;
}

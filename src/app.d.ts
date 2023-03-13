type FilmModel = {  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string | null;
  //schedule:       Schedule;
  rating: Rating;
  weight: number;
  //network:        Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
};

interface Links {
  self: PreviousEpisode;
  previousepisode: PreviousEpisode;
}

interface PreviousEpisode {
  href: string;
}

interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
}

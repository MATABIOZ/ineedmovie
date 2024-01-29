interface IBelongsToCollecton {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

type GenresNamesType =
  | "Action"
  | "Adventure"
  | "Animation"
  | "Comedy"
  | "Crime"
  | "Documentary"
  | "Drama"
  | "Family"
  | "Fantasy"
  | "History"
  | "Horror"
  | "Music"
  | "Mystery"
  | "Romance"
  | "Science Fiction"
  | "TV Movie"
  | "Thriller"
  | "War"
  | "Western";
interface IGenre {
  id: number;
  name: GenresNamesType;
}
export interface IGenres {
  genres: Array<IGenre>;
}

interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ISingleMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelongsToCollecton | null;
  budget: number;
  genres: Array<IGenre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<IProductionCompany>;
  production_countries: Array<IProductionCountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<ISpokenLanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface IMovieList {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}

interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  published_at: string;
  official: boolean;
  id: string;
}
export interface IVideos {
  id: number;
  results: Array<IVideo>;
}

export interface IInitialContentState {
  singleMovie: ISingleMovie;
  genres: IGenres;
  videos: Array<IVideos>;
  loading: boolean;
  errorMessage: string;
  popularMovies: IMovieList;
  nowPlayingMovies: IMovieList;
  topRatedMovies: IMovieList;
  upcomingMovies: IMovieList;
  actionMovies: IMovieList;
  adventureMovies: IMovieList;
  animationMovies: IMovieList;
  comedyMovies: IMovieList;
  crimeMovies: IMovieList;
  documentaryMovies: IMovieList;
  dramaMovies: IMovieList;
  familyMovies: IMovieList;
  fantasyMovies: IMovieList;
  historyMovies: IMovieList;
  horrorMovies: IMovieList;
  musicMovies: IMovieList;
  mysteryMovies: IMovieList;
  romanceMovies: IMovieList;
  scienceFictionMovies: IMovieList;
  tvMovieMovies: IMovieList;
  thrillerMovies: IMovieList;
  warMovies: IMovieList;
  westernMovies: IMovieList;
}

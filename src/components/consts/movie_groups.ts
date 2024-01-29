export type MovieGroupCamelCaseTitleType =
  | "popular"
  | "nowPlaying"
  | "topRated"
  | "upcoming"
  | "action"
  | "adventure"
  | "animation"
  | "comedy"
  | "crime"
  | "documentary"
  | "drama"
  | "family"
  | "fantasy"
  | "history"
  | "horror"
  | "music"
  | "mystery"
  | "romance"
  | "scienceFiction"
  | "tvMovie"
  | "thriller"
  | "war"
  | "western";

export interface IMovieGroup {
  id?: number;
  groupType: "main" | "genre";
  title: string;
  camelCaseTitle: MovieGroupCamelCaseTitleType;
  pathTitle: string;
}

export const movieGroupsArr: Array<IMovieGroup> = [
  {
    groupType: "main",
    title: "Now Playing",
    camelCaseTitle: "nowPlaying",
    pathTitle: "now_playing",
  },
  {
    groupType: "main",
    title: "Popular",
    camelCaseTitle: "popular",
    pathTitle: "popular",
  },
  {
    groupType: "main",
    title: "Top Rated",
    camelCaseTitle: "topRated",
    pathTitle: "top_rated",
  },
  {
    groupType: "main",
    title: "Upcoming",
    camelCaseTitle: "upcoming",
    pathTitle: "upcoming",
  },
  {
    id: 28,
    groupType: "genre",
    title: "Action",
    camelCaseTitle: "action",
    pathTitle: "action",
  },
  {
    id: 12,
    groupType: "genre",
    title: "Adventure",
    camelCaseTitle: "adventure",
    pathTitle: "adventure",
  },
  {
    id: 16,
    groupType: "genre",
    title: "Animation",
    camelCaseTitle: "animation",
    pathTitle: "animation",
  },
  {
    id: 35,
    groupType: "genre",
    title: "Comedy",
    camelCaseTitle: "comedy",
    pathTitle: "comedy",
  },
  {
    id: 80,
    groupType: "genre",
    title: "Crime",
    camelCaseTitle: "crime",
    pathTitle: "crime",
  },
  {
    id: 99,
    groupType: "genre",
    title: "Documentary",
    camelCaseTitle: "documentary",
    pathTitle: "documentary",
  },
  {
    id: 18,
    groupType: "genre",
    title: "Drama",
    camelCaseTitle: "drama",
    pathTitle: "drama",
  },
  {
    id: 10751,
    groupType: "genre",
    title: "Family",
    camelCaseTitle: "family",
    pathTitle: "family",
  },
  {
    id: 14,
    groupType: "genre",
    title: "Fantasy",
    camelCaseTitle: "fantasy",
    pathTitle: "fantasy",
  },
  {
    id: 36,
    groupType: "genre",
    title: "History",
    camelCaseTitle: "history",
    pathTitle: "history",
  },
  {
    id: 27,
    groupType: "genre",
    title: "Horror",
    camelCaseTitle: "horror",
    pathTitle: "horror",
  },
  {
    id: 10402,
    groupType: "genre",
    title: "Music",
    camelCaseTitle: "music",
    pathTitle: "music",
  },
  {
    id: 9648,
    groupType: "genre",
    title: "Mystery",
    camelCaseTitle: "mystery",
    pathTitle: "mystery",
  },
  {
    id: 10749,
    groupType: "genre",
    title: "Romance",
    camelCaseTitle: "romance",
    pathTitle: "romance",
  },
  {
    id: 878,
    groupType: "genre",
    title: "Science Fiction",
    camelCaseTitle: "scienceFiction",
    pathTitle: "science_fiction",
  },
  {
    id: 10770,
    groupType: "genre",
    title: "TV Movie",
    camelCaseTitle: "tvMovie",
    pathTitle: "tv_movie",
  },
  {
    id: 53,
    groupType: "genre",
    title: "Thriller",
    camelCaseTitle: "thriller",
    pathTitle: "thriller",
  },
  {
    id: 10752,
    groupType: "genre",
    title: "War",
    camelCaseTitle: "war",
    pathTitle: "war",
  },
  {
    id: 37,
    groupType: "genre",
    title: "Western",
    camelCaseTitle: "western",
    pathTitle: "western",
  },
];

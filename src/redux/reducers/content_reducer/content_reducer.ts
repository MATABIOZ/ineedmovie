import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { axiosTmdbApiInstance } from "../../../api/axios_tmdb_api_config";
import {
  IMovieGroup,
  MovieGroupCamelCaseTitleType,
} from "../../../components/consts/movie_groups";

import {
  IGenres,
  IInitialContentState,
  IMovie,
  IMovieList,
  ISingleMovie,
  IVideos,
} from "./content_reducer_types";

const initialContentState: IInitialContentState = {
  singleMovie: {} as ISingleMovie,
  genres: {} as IGenres,
  videos: [],
  loading: false,
  errorMessage: "",
  popularMovies: {} as IMovieList,
  nowPlayingMovies: {} as IMovieList,
  topRatedMovies: {} as IMovieList,
  upcomingMovies: {} as IMovieList,
  actionMovies: {} as IMovieList,
  adventureMovies: {} as IMovieList,
  animationMovies: {} as IMovieList,
  comedyMovies: {} as IMovieList,
  crimeMovies: {} as IMovieList,
  documentaryMovies: {} as IMovieList,
  dramaMovies: {} as IMovieList,
  familyMovies: {} as IMovieList,
  fantasyMovies: {} as IMovieList,
  historyMovies: {} as IMovieList,
  horrorMovies: {} as IMovieList,
  musicMovies: {} as IMovieList,
  mysteryMovies: {} as IMovieList,
  romanceMovies: {} as IMovieList,
  scienceFictionMovies: {} as IMovieList,
  tvMovieMovies: {} as IMovieList,
  thrillerMovies: {} as IMovieList,
  warMovies: {} as IMovieList,
  westernMovies: {} as IMovieList,
};

export const getSingleMovie = createAsyncThunk<void, number>(
  "content/getSingleMovie",
  async (movieId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosTmdbApiInstance.get<ISingleMovie>(
        `/movie/${movieId}?append_to_response=videos`,
      );
      dispatch(addSingleMovie(data));
    } catch (error) {
      error instanceof AxiosError &&
        error.response &&
        rejectWithValue(
          `${error.response.status}(${error.response.statusText})`,
        );
    }
  },
);

export const getGenres = createAsyncThunk(
  "content/getGenres",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } =
        await axiosTmdbApiInstance.get<IGenres>(`/genre/movie/list?`);
      dispatch(addGenres(data));
    } catch (error) {
      error instanceof AxiosError &&
        error.response &&
        rejectWithValue(
          `${error.response.status}(${error.response.statusText})`,
        );
    }
  },
);

export const getVideos = createAsyncThunk<void, number>(
  "content/getVideos",
  async (movieId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosTmdbApiInstance.get<IVideos>(
        `/movie/${movieId}/videos?`,
      );
      dispatch(addVideos(data));
    } catch (error) {
      error instanceof AxiosError &&
        error.response &&
        rejectWithValue(
          `${error.response.status}(${error.response.statusText})`,
        );
    }
  },
);

export const getMovies = createAsyncThunk<void, Array<IMovieGroup>>(
  "content/getMovies",
  async (arr, { dispatch, rejectWithValue }) => {
    try {
      for (const item of arr) {
        const { data } = await axiosTmdbApiInstance.get<IMovieList>(
          item.groupType === "main"
            ? `/movie/${item.pathTitle}?page=1`
            : `/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=${item.id}`,
        );
        dispatch(addMovies({ data: data, statePrefix: item.camelCaseTitle }));
      }
    } catch (error) {
      error instanceof AxiosError &&
        error.response &&
        rejectWithValue(
          `${error.response.status}(${error.response.statusText})`,
        );
    }
  },
);

export const getNextPageMovies = createAsyncThunk<
  void,
  { group: IMovieGroup; page: number }
>("content/getNextPageMovies", async (obj, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axiosTmdbApiInstance.get<IMovieList>(
      obj.group.groupType === "main"
        ? `/movie/${obj.group.pathTitle}?page=${obj.page + 1}`
        : `/discover/movie?include_adult=false&include_video=false&page=${obj.page + 1}&sort_by=popularity.desc&with_genres=${obj.group.id}`,
    );
    dispatch(
      addNextPageMovies({
        data: data.results,
        statePrefix: obj.group.camelCaseTitle,
      }),
    );
  } catch (error) {
    error instanceof AxiosError &&
      error.response &&
      rejectWithValue(`${error.response.status}(${error.response.statusText})`);
  }
});

export const appContentSlice = createSlice({
  name: "appContent",
  initialState: initialContentState,
  reducers: {
    addSingleMovie: (state, action: PayloadAction<ISingleMovie>) => {
      state.singleMovie = action.payload;
    },
    addGenres: (state, action: PayloadAction<IGenres>) => {
      state.genres = action.payload;
    },
    addVideos: (state, action: PayloadAction<IVideos>) => {
      state.videos.push(action.payload);
    },
    addMovies: (
      state,
      action: PayloadAction<{
        data: IMovieList;
        statePrefix: MovieGroupCamelCaseTitleType;
      }>,
    ) => {
      state[`${action.payload.statePrefix}Movies`] = action.payload.data;
    },
    addNextPageMovies: (
      state,
      action: PayloadAction<{
        data: Array<IMovie>;
        statePrefix: MovieGroupCamelCaseTitleType;
      }>,
    ) => {
      state[`${action.payload.statePrefix}Movies`].results = [
        ...state[`${action.payload.statePrefix}Movies`].results,
        ...action.payload.data,
      ];

      state[`${action.payload.statePrefix}Movies`].page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSingleMovie.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getSingleMovie.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getSingleMovie.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      })
      .addCase(getGenres.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getGenres.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      })
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getVideos.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      })
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getMovies.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      })
      .addCase(getNextPageMovies.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getNextPageMovies.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getNextPageMovies.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      }),
});

export const {
  addSingleMovie,
  addGenres,
  addVideos,
  addMovies,
  addNextPageMovies,
} = appContentSlice.actions;

export const appContentReducer = appContentSlice.reducer;

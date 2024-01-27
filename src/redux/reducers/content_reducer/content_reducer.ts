import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { axiosTmdbApiInstance } from "../../../api/axios_tmdb_api_config";

import {
  IGenres,
  IInitialContentState,
  IMovieList,
  ISingleMovie,
  IVideos,
} from "./content_reducer_types";

const initialContentState: IInitialContentState = {
  singleMovie: {} as ISingleMovie,
  genres: {} as IGenres,
  popularMovies: {} as IMovieList,
  videos: [],
  loading: false,
  errorMessage: "",
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

export const getPopularMovies = createAsyncThunk(
  "content/getPopularMovies",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosTmdbApiInstance.get<IMovieList>(
        `/movie/popular?page=1`,
      );
      dispatch(addPopularMovies(data));
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

export const appContentSlice = createSlice({
  name: "appContent",
  initialState: initialContentState,
  reducers: {
    addSingleMovie: (state, action: PayloadAction<ISingleMovie>) => {
      state.singleMovie = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<IMovieList>) => {
      state.popularMovies = action.payload;
    },
    addGenres: (state, action: PayloadAction<IGenres>) => {
      state.genres = action.payload;
    },
    addVideos: (state, action: PayloadAction<IVideos>) => {
      state.videos.push(action.payload);
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
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(getPopularMovies.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
      })
      .addCase(getVideos.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.errorMessage = `${action.payload}`;
      }),
});

export const { addSingleMovie, addPopularMovies, addGenres, addVideos } =
  appContentSlice.actions;

export const appContentReducer = appContentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosTmdbApiInstance } from "../../../api/axios_tmdb_api_config";
const initialContentState = {
    singleMovie: {},
    genres: {},
    videos: [],
    favoriteMovies: [],
    loading: false,
    errorMessage: "",
    popularMovies: {},
    nowPlayingMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    actionMovies: {},
    adventureMovies: {},
    animationMovies: {},
    comedyMovies: {},
    crimeMovies: {},
    documentaryMovies: {},
    dramaMovies: {},
    familyMovies: {},
    fantasyMovies: {},
    historyMovies: {},
    horrorMovies: {},
    musicMovies: {},
    mysteryMovies: {},
    romanceMovies: {},
    scienceFictionMovies: {},
    tvMovieMovies: {},
    thrillerMovies: {},
    warMovies: {},
    westernMovies: {},
    searchResults: {},
};
export const getSingleMovie = createAsyncThunk("content/getSingleMovie", async (movieId, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(`/movie/${movieId}?append_to_response=credits`);
        dispatch(addSingleMovie(data));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getGenres = createAsyncThunk("content/getGenres", async (_, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(`/genre/movie/list?`);
        dispatch(addGenres(data));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getVideos = createAsyncThunk("content/getVideos", async (movieId, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(`/movie/${movieId}/videos?`);
        dispatch(addVideos(data));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getFavoriteMovies = createAsyncThunk("content/getFavoriteMovies", async (favoriteMoviesIdArr, { dispatch, rejectWithValue }) => {
    try {
        const moviesArr = [];
        for (const movieId of favoriteMoviesIdArr) {
            const { data } = await axiosTmdbApiInstance.get(`/movie/${movieId}?append_to_response=credits`);
            moviesArr.push(data);
        }
        dispatch(addFavoriteMovies(moviesArr));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getMovies = createAsyncThunk("content/getMovies", async (arr, { dispatch, rejectWithValue }) => {
    try {
        for (const item of arr) {
            const { data } = await axiosTmdbApiInstance.get(item.groupType === "main"
                ? `/movie/${item.pathTitle}?page=1`
                : `/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=${item.id}`);
            dispatch(addMovies({ data: data, statePrefix: item.camelCaseTitle }));
        }
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getNextPageMovies = createAsyncThunk("content/getNextPageMovies", async (obj, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(obj.group.groupType === "main"
            ? `/movie/${obj.group.pathTitle}?page=${obj.page + 1}`
            : `/discover/movie?include_adult=false&include_video=false&page=${obj.page + 1}&sort_by=popularity.desc&with_genres=${obj.group.id}`);
        dispatch(addNextPageMovies({
            data: data.results,
            statePrefix: obj.group.camelCaseTitle,
        }));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getSearchResults = createAsyncThunk("content/getSearchResults", async (props, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(`/search/movie?query=${props.value}&include_adult=false&page=1`);
        props.setNoResults &&
            props.setNoResults(data.total_results === 0 ? true : false);
        props.setIsVisibleNoResultsMessage &&
            props.setIsVisibleNoResultsMessage(data.total_results === 0 ? true : false);
        dispatch(addSearchResults(data));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getNextPageSearchResults = createAsyncThunk("content/getNextPageSearchResults", async (props, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosTmdbApiInstance.get(`/search/movie?query=${props.value}&include_adult=false&page=${props.page + 1}`);
        dispatch(addNextPageSearchResults(data.results));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const appContentSlice = createSlice({
    name: "appContent",
    initialState: initialContentState,
    reducers: {
        addSingleMovie: (state, action) => {
            state.singleMovie = action.payload;
        },
        addGenres: (state, action) => {
            state.genres = action.payload;
        },
        addVideos: (state, action) => {
            state.videos.push(action.payload);
        },
        addFavoriteMovies: (state, action) => {
            state.favoriteMovies = action.payload;
        },
        addMovies: (state, action) => {
            state[`${action.payload.statePrefix}Movies`] = action.payload.data;
        },
        addNextPageMovies: (state, action) => {
            state[`${action.payload.statePrefix}Movies`].results = [
                ...state[`${action.payload.statePrefix}Movies`].results,
                ...action.payload.data,
            ];
            state[`${action.payload.statePrefix}Movies`].page += 1;
        },
        addSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        addNextPageSearchResults: (state, action) => {
            state.searchResults.results = [
                ...state.searchResults.results,
                ...action.payload,
            ];
            state.searchResults.page += 1;
        },
    },
    extraReducers: (builder) => builder
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
    })
        .addCase(getSearchResults.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(getSearchResults.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(getSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    }),
});
export const { addSingleMovie, addGenres, addVideos, addMovies, addNextPageMovies, addSearchResults, addNextPageSearchResults, addFavoriteMovies, } = appContentSlice.actions;
export const appContentReducer = appContentSlice.reducer;

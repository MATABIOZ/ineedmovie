import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosMockapiInstance } from "../../../api/axios_mockapi_config";
const initialAuthState = {
    user: null,
    usersLoginsAndEmails: [],
    loading: false,
    errorMessage: "",
};
export const authentificationUser = createAsyncThunk("auth/authentificationUser", async (authData, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosMockapiInstance.get(`/users`);
        if (authData.token) {
            const tokenMatch = data.find((item) => item.token === authData.token);
            tokenMatch && dispatch(addUser(tokenMatch));
        }
        else if (authData.email &&
            authData.password) {
            const emailAndPasswordMatch = data.find((item) => item.email ===
                authData.email &&
                item.password ===
                    authData.password);
            if (emailAndPasswordMatch) {
                dispatch(addUser(emailAndPasswordMatch));
                localStorage.setItem("token", emailAndPasswordMatch.token);
            }
            else {
                throw new Error("Invalid email or password.");
            }
        }
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
        error instanceof Error && alert(`${error.message}`);
    }
});
export const createUser = createAsyncThunk("auth/createUser", async (user, { dispatch, rejectWithValue }) => {
    try {
        await axiosMockapiInstance.post(`/users`, user);
        await axiosMockapiInstance.post(`/users_logins_and_emails`, {
            login: user.login,
            email: user.email,
        });
        localStorage.setItem("token", user.token);
        dispatch(authentificationUser({ token: user.token }));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const getUsersLoginsAndEmails = createAsyncThunk("auth/getUsersLoginsAndEmails", async (_, { dispatch, rejectWithValue }) => {
    try {
        const { data } = await axiosMockapiInstance.get(`/users_logins_and_emails`);
        dispatch(addUsersLoginsAndEmails(data));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const switchUserTheme = createAsyncThunk("auth/toggleUserTheme", async (user, { dispatch, rejectWithValue }) => {
    try {
        const newTheme = user.theme === "dark" ? "light" : "dark";
        await axiosMockapiInstance.put(`/users/${user.id}`, {
            ...user,
            theme: newTheme,
        });
        dispatch(switchTheme(newTheme));
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const deleteUser = createAsyncThunk("auth/deleteUser", async (params, { dispatch, rejectWithValue }) => {
    try {
        await axiosMockapiInstance.delete(`/users/${params.id}`);
        await axiosMockapiInstance.delete(`/users_logins_and_emails/${params.id}`);
        dispatch(clearUser());
        alert(`User "${params.login}" has been successfully deleted.`);
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const changeArrFavoriteMovies = createAsyncThunk("auth/changeArrFavoriteMovies", async (params, { dispatch, rejectWithValue }) => {
    try {
        const movieId = params.movieId;
        const user = params.user;
        let newFavoriteMoviesArr = [];
        if (user.favoriteMovies.indexOf(movieId) === -1) {
            newFavoriteMoviesArr = [...user.favoriteMovies, movieId];
            console.log(`Add to new favorite movie "${movieId}".`);
        }
        else {
            newFavoriteMoviesArr = user.favoriteMovies.filter((item) => item !== movieId);
            console.log(`Delete movie "${movieId}" from favorite movies.`);
        }
        const updatedUser = {
            ...user,
            favoriteMovies: newFavoriteMoviesArr,
        };
        dispatch(addModifiedArrFavoriteMovies(newFavoriteMoviesArr));
        await axiosMockapiInstance.put(`/users/${user.id}`, updatedUser);
    }
    catch (error) {
        error instanceof AxiosError &&
            error.response &&
            rejectWithValue(`${error.response.status}(${error.response.statusText})`);
    }
});
export const appAuthSlice = createSlice({
    name: "appAuth",
    initialState: initialAuthState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addUsersLoginsAndEmails: (state, action) => {
            state.usersLoginsAndEmails = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem("token");
        },
        switchTheme: (state, action) => {
            state.user.theme = action.payload;
        },
        addModifiedArrFavoriteMovies: (state, action) => {
            state.user.favoriteMovies = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    })
        .addCase(getUsersLoginsAndEmails.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(getUsersLoginsAndEmails.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(getUsersLoginsAndEmails.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    })
        .addCase(authentificationUser.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(authentificationUser.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(authentificationUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    })
        .addCase(switchUserTheme.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(switchUserTheme.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(switchUserTheme.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    })
        .addCase(changeArrFavoriteMovies.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
    })
        .addCase(changeArrFavoriteMovies.fulfilled, (state) => {
        state.loading = false;
    })
        .addCase(changeArrFavoriteMovies.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `${action.payload}`;
    }),
});
export const { addUser, addUsersLoginsAndEmails, clearUser, switchTheme, addModifiedArrFavoriteMovies, } = appAuthSlice.actions;
export const appAuthReducer = appAuthSlice.reducer;

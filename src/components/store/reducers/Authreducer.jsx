// features/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { view } from '../../../data/allapi';

// Get token from localStorage
const token = localStorage.getItem('token');

// ✅ Async thunk to fetch user profile
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    console.log("fetchUser called ✅");

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error("No token found");

      const response = await fetch(view.GET_USER_PROFILE, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`  // ✅ Corrected
        }
      });

      console.log("Response mil gaya", response);

      if (!response.ok) throw new Error("Unauthorized");

      const { userdata } = await response.json();
      console.log("User data:", userdata);
      return userdata;
    } catch (error) {
      console.error("❌ Error in fetchUser:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ✅ Slice for auth state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token,
    isLoggedIn: !!token,
    loading: false,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  }
});

// ✅ Export actions and reducer
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;

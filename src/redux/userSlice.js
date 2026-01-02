import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { API_BASE_URL } from '../apiConfig';

// 👉 Register user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      // API_BASE_URL is 'https://darkw.ai/api', so we shouldn't add another /api prefix if the base has it.
      // Ideally, API_BASE_URL should be 'https://darkw.ai' so we can append '/api/users'.
      // But based on user request "https://darkw.ai/api", we assume endpoints start after that.
      // Controller routes are 'users' and 'auth'.
      // So path should be `${API_BASE_URL}/users`
      // Hardcoding groupId: 3 (Customer) as it matches the default typically used in analytics/backend assumptions
      const payload = { ...userData, groupId: 3 };
      const response = await axios.post(`${API_BASE_URL}/users`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

// 👉 Login user
export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
      // Response contains { accessToken }
      // We need to decode it to get user details (sub -> _id)
      const { accessToken } = response.data;

      let user = null;
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          // payload: { sub: userId, name: string, email: string, role: string, ... }
          user = {
            _id: decoded.sub,
            userName: decoded.name,
            email: decoded.email,
            role: decoded.role,
            accessToken: accessToken
          };
        } catch (e) {
          console.error("Failed to decode token", e);
        }
      }

      return user || response.data; // Fallback if decode fails (though likely won't work well)
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

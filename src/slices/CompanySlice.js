import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllCompanies = createAsyncThunk('getAllCompanies', async () => {
    try {
        const { data } = await axios.get('http://localhost:3008/api/companies');
        return data;
    } catch(error) {
        return error;
    }
});

const companySlice = createSlice({
    name: 'company-slice',
    initialState: {
        isLoading: false,
        data: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCompanies.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAllCompanies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
    }
});

export default companySlice.reducer;
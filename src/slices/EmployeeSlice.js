import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createEmployee = createAsyncThunk('createEmployee', async (payload) => {
    try {
        const { data } = await axios.post('http://localhost:3008/api/employees', payload);
        return data;
    } catch(error) {
        return error;
    }
});

export const getAllEmployees = createAsyncThunk('getAllEmployee', async () => {
    try {
        const { data } = await axios.get('http://localhost:3008/api/employees');
        return data;
    } catch(error) {
        return error;
    }
});

export const importEmployees = createAsyncThunk('importEmployees', async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await axios.post('http://localhost:3008/api/employees/import', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return data;
    } catch(error) {
        return error;
    }
});
const employeeSlice = createSlice({
    name: 'employee-slice',
    initialState: {
        isLoading: false,
        data: null,
        isCreated: false,
        isUploaded: false
    },
    reducers: {
        resetCreated: (state) => {
            state.isCreated = false;
            state.isUploaded = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createEmployee.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(createEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isCreated = true;
        })
        .addCase(getAllEmployees.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getAllEmployees.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(importEmployees.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(importEmployees.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUploaded = true;
        })
    }
});

export const { resetCreated } = employeeSlice.actions;

export default employeeSlice.reducer;
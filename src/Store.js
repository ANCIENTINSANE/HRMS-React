import { configureStore } from '@reduxjs/toolkit';
import CompanyReducer from './slices/CompanySlice';
import EmployeeReducer from './slices/EmployeeSlice';

const store = configureStore({
    reducer: {
        employees: EmployeeReducer,
        companies: CompanyReducer
    }
});

export default store;
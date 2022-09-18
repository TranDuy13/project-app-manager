import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contractService from "./contractService";

const initialState = {
    contract: {},
    contracts:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

export const createContract = createAsyncThunk(
    "contract/createContract",
    async (data, thunkAPI) => {
      try {
        return await contractService.createContract(data)
      } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
    
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const getContract = createAsyncThunk(
    "contract/getContract",
    async (_, thunkAPI) => {
      try {
        return await contractService.getContract()
      } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
    
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const updateContract = createAsyncThunk(
    "contract/updateContract",
    async (data, thunkAPI) => {
      try {
        return await contractService.updateContract(data)
      } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
    
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const contractSlice = createSlice({
    name: "contract",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },
    },
    extraReducers: (builder) => {
        builder
      .addCase(createContract.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContract.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createContract.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    }).addCase(getContract.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContract.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contracts=action.payload.data;
        state.message = action.payload;
      })
      .addCase(getContract.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    }).addCase(updateContract.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateContract.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contracts=action.payload.data;
        state.message = action.payload;
      })
      .addCase(updateContract.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
    });;
},
});

export const { reset } = contractSlice.actions;
export default contractSlice.reducer;
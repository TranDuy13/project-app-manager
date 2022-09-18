import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listService from "./listService";

const initialState = {
  listSchedule:[],
  list: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const enrollSchedule = createAsyncThunk(
  "schedule/enrollSchedule",
  async (data,thunkAPI) => {
    try {
      return await listService.enrollSchedule(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getListSchedule = createAsyncThunk(
  "schedule/getAllSchedule",
  async (_,thunkAPI) => {
    try {
      return await listService.getListSchedule();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getListScheduleByWeek = createAsyncThunk(
  "schedule/getScheduleByWeeks",
  async (data,thunkAPI) => {
    try {
      return await listService.getListScheduleByWeek(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getListScheduleByWeekUser = createAsyncThunk(
  "schedule/getScheduleByWeeksUser",
  async (data,thunkAPI) => {
    try {
      return await listService.getListScheduleByWeekUser(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getListScheduleNextWeek = createAsyncThunk(
  "schedule/getScheduleNextWeeks",
  async (_,thunkAPI) => {
    try {
      return await listService.getListScheduleNextWeek();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateSchedule = createAsyncThunk(
  "schedule/updateSchedule",
  async(data,thunkAPI)=>{
    try {
      return await listService.updateSchedule(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const updateScheduleUser = createAsyncThunk(
  "schedule/updateScheduleUser",
  async(data,thunkAPI)=>{
    try {
      return await listService.updateScheduleUser(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const createSchedule =createAsyncThunk(
  "schedule/createSchedule",
  async(_,thunkAPI)=>{
    try {
      return await listService.createSchedule();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const deleteSchedule = createAsyncThunk("schedule/deleteSchedule",
async(id,thunkAPI)=>{
  try {

    return await listService.deleteSchedule(id);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})
export const listSlice = createSlice({
  name: "schedule",
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
        .addCase(getListSchedule.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getListSchedule.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(getListSchedule.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }) .addCase(updateSchedule.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateSchedule.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(updateSchedule.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }).addCase(createSchedule.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createSchedule.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(createSchedule.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }).addCase(deleteSchedule.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteSchedule.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(deleteSchedule.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }).addCase(enrollSchedule.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(enrollSchedule.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(enrollSchedule.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }).addCase(getListScheduleByWeek.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getListScheduleByWeek.fulfilled, (state, action) => {
          state.list = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(getListScheduleByWeek.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.list = null;
          state.listSchedule = null;
        }).addCase(getListScheduleByWeekUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getListScheduleByWeekUser.fulfilled, (state, action) => {
          state.list = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(getListScheduleByWeekUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.list = null;
          state.listSchedule = null;
        }).addCase(getListScheduleNextWeek.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getListScheduleNextWeek.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(getListScheduleNextWeek.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.listSchedule = null;
          state.list = null;
        }).addCase(updateScheduleUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateScheduleUser.fulfilled, (state, action) => {
          state.listSchedule = action.payload.data
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload;
        })
        .addCase(updateScheduleUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.listSchedule = null;
          state.list = null;
        });
    },

});
export const { reset } = listSlice.actions;
export default listSlice.reducer;

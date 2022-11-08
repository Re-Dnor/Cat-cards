import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../../store/store";
import { BASE_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

export const fetchCats = createAsyncThunk("cats/fetch", async () => {
    const URL = `${BASE_URL}/api/cats?limit=0&skip=5`;
    const response = await fetch(URL);
    return await response.json();
  }
);

type startedPropertiesKitty = {
  _id: string;
  tags: string[];
  owner: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type propertiesKitty = {
  _id: string;
  owner: string | null;
  like: boolean;
};

type catsState = {
  cats: propertiesKitty[];
  loading: boolean;
};

const initialState: catsState = {
  cats: [],
  loading: false
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    handleLiked: (state, action) => {
      state.cats = state.cats.filter((cat) => {
        if (cat._id === action.payload._id) cat.like = !cat.like;
        return cat;
      });
    },
    handleRemove: (state, action) => {
      state.cats = state.cats.filter((cat) => cat._id !== action.payload);
    }
  },
    extraReducers: (builder) => {
      builder.addCase(fetchCats.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchCats.fulfilled, (state, action) => {
        const newKittyes = action.payload.map((cat: startedPropertiesKitty) => {
          const propertiesCat = {
            _id: cat._id,
            owner: cat.owner,
            like: false
          };
          return propertiesCat;
        });
        state.cats = newKittyes;
        state.loading = false;
      });
      builder.addCase(fetchCats.rejected, (state) => {
        state.loading = false;
        toast.error("Oops wrong fetch data");
      });
    }
});

export const { handleLiked, handleRemove } = catsSlice.actions;
export const selectCats = (state: RootState) => state.cats.cats;
export const selectLoading = (state: RootState) => state.cats.loading;
export default catsSlice.reducer;
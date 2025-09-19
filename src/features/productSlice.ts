import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  items: any[];
  isLoading: boolean;
  error: string | null;
}

const fetchProducts = createAsyncThunk<any>(
  "products/fetchproducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const respJons = resp.json();
    return respJons;
  }
);

const fetchProductsById = createAsyncThunk<any, number>(
  "products/fetchproductsBId",
  async (id: number) => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const respJons = resp.json();
    return respJons;
  }
);

const initialState: ProductState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // getting products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.items = action.payload.products;
        console.log(action);
      })
      .addCase(fetchProducts.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch products";
      });

    builder
      .addCase(fetchProductsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.items = action.payload;
        console.log(action);
      })
      .addCase(fetchProductsById.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export { fetchProducts, fetchProductsById };
export default productsSlice.reducer;

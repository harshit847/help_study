import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  images: string[];
}

interface ProductStore {
  products: Product[];
  total: number;
  fetchProducts: (skip?: number, search?: string, category?: string) => void;
  selectedProduct: Product | null;
  fetchProduct: (id: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  total: 0,
  selectedProduct: null,
  
  fetchProducts: async (skip = 0, search = "", category = "") => {
    try {
      let url = "";
      if (search) url = `https://dummyjson.com/products/search?q=${search}`;
      else if (category) url = `https://dummyjson.com/products/category/${category}`;
      else url = `https://dummyjson.com/products?limit=10&skip=${skip}`;

      const res = await axios.get(url);
      set({
        products: res.data.products,
        total: res.data.total,
      });
    } catch (err) {
      console.error(err);
    }
  },

  fetchProduct: async (id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      set({ selectedProduct: res.data });
    } catch (err) {
      console.error(err);
    }
  },
}));

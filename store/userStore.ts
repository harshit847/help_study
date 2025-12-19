// src/store/userStore.ts
import { create } from "zustand";
import axios from "axios";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  company?: {
    name: string;
  };
}

interface UserState {
  users: User[];
  total: number;
  fetchUsers: (skip?: number, q?: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  total: 0,

  fetchUsers: async (skip = 0, q = "") => {
    const url = q
      ? `https://dummyjson.com/users/search?q=${q}`
      : `https://dummyjson.com/users?limit=10&skip=${skip}`;

    const res = await axios.get(url);

    set({
      users: res.data.users,
      total: res.data.total,
    });
  },
}));

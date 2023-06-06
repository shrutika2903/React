import { createContext } from "react";

const initialState = {
  first: "shrutika",
  last: "vethekar"
};

export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);

export default context;
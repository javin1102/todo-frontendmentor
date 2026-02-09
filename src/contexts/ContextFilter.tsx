import React from "react";
import type useFilterState from "../custom-hooks/useFilterState";

export const ContextFilter = React.createContext<
  ReturnType<typeof useFilterState> | undefined
>(undefined);

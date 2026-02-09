import React from "react";
import useFilterState from "../custom-hooks/useFilterState";
import { ContextFilter } from "./ContextFilter";

const ProviderFilter = ({ children }: { children: React.ReactNode }) => {
  const value = useFilterState();
  return (
    <ContextFilter.Provider value={value}>{children}</ContextFilter.Provider>
  );
};

export default ProviderFilter;

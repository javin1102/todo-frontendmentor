import React from "react";
import { ContextFilter } from "../contexts/ContextFilter";

const useFilter = () => {
  const context = React.useContext(ContextFilter);
  if (!context) {
    throw new Error("useFilter must be used within ProviderFilter");
  }
  return context;
};
export default useFilter;

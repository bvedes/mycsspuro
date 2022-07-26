import { useState } from "react";
import { initialBunch } from "../utils/index";

export const useEmployedc = () => {
  const [employeds, setEmployeds] = useState(initialBunch);

  return {
    employeds,
    setEmployeds,
  };
};

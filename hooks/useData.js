import { useState } from "react";
import { initialData } from "../utils/index";

export const useData = () => {
  const [data, setData] = useState(initialData);

  return [data, setData];
};

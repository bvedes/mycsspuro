import { useState } from "react";
import { initialData } from "../utils/index";

export const useData = () => {
  const [data, setData] = useState(initialData);

  return [data, setData]; // o retorno da função hook pode ser objct ou array
};

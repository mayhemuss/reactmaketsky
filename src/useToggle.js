import { useState } from "react";

export const useToggle = (defaultActive) => {
  const [active, setActive] = useState(defaultActive);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  return [active, toggle];
};

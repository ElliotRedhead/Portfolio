import { createContext } from "react";

// @ts-ignore
export const DisplayContext = createContext({
  projectsVisibility: false,
  toggleProjectsVisibility: () => {}
});

export default DisplayContext;
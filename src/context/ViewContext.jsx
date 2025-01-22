import { createContext } from "react";

export const ViewContext = createContext({
    viewName: 'mainMenu',
    setViewName: () => {}
})
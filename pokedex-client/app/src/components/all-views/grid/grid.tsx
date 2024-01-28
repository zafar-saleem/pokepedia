import React from "react";
import { useLocation } from "react-router-dom";
import { IContents, useMain } from "../../../context/mainContext";
import { GridItem } from "./components/grid-item";

const GridView = React.memo(({ ...props }: IContents) => {
  // @ts-ignore
  const { filteredContents } = useMain();
  const { pathname } = useLocation();

  if (filteredContents && pathname !== "/favorites") {
    return <GridItem {...filteredContents} />
  }

  return <GridItem {...props} />
});

export default GridView;

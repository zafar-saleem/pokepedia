import React from "react";
import { useLocation } from "react-router";
import { ListItem } from "./components/list-item";
import { useMain } from "../../../context/mainContext";


const ListView = React.memo(({ ...props }) => {
  // @ts-ignore
  const { filteredContents } = useMain();
  const { pathname } = useLocation();

  if (filteredContents && pathname !== "/favorites") {
    return <ListItem {...filteredContents} />
  }

  return <ListItem {...props} />
});

export default ListView;

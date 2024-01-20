import React from "react";
import * as Styles from "./header.styles";
import { useMain } from "../../context/mainContext";
import List from "./assets/list.webp";
import Grid from "./assets/grid.webp";

const Navigation = React.lazy(() => import("../navigation"));
const Search = React.lazy(() => import("../search"));
const Types = React.lazy(() => import("../types"));

const Header = () => {
  const { updateAllView }: any = useMain();

  return (
    <Styles.Header>
      <React.Suspense fallback={<p>Loading Navigation...</p>}>
        <Navigation />
      </React.Suspense>
      <Styles.Controllers>
        <React.Suspense fallback={<p>Loading search box...</p>}>
          <Search />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading types...</p>}>
          <Types />
        </React.Suspense>
        <Styles.Button className="list" onClick={() => updateAllView("list")}>
          <img src={List} alt="List" />
        </Styles.Button>
        <Styles.Button className="grid" onClick={() => updateAllView("grid")}>
          <img src={Grid} alt="Grid" />
        </Styles.Button>
      </Styles.Controllers>
    </Styles.Header>
  )
}

export default Header;
